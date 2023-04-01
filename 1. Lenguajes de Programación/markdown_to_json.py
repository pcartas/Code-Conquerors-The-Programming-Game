import json
import re
import sys

def process_file(file_path):
    results = []

    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

        # Match question blocks

        pattern = r'## \d+ <a name = "\d+"></a>(?:\n|.)*?⭐(?:\n|.)*?⭐⭐(?:\n|.)*?⭐⭐⭐(?:\n|.)*?<details>(?:\n|.)*?</details>\s*<br>'

        question_blocks = re.findall(pattern, content, re.MULTILINE | re.DOTALL)

        for question_block in question_blocks:
            # Get question number
            pattern = r'## (\d+) <a name = "\d+"></a>'
            question_number = re.search(pattern, question_block).group(1)
            print(f'Processing question {question_number}')

            # Get the first question wich starts with ⭐ and ends before ⭐⭐ (without ⭐⭐)
            pattern = r'⭐(?:\n|.)*?(?=⭐⭐)'
            question_1 = re.search(pattern, question_block).group(0).strip()
            #print(f'Question 1: {question_1}')

            # get the first paragraph inside of question_1
            pattern = r'^(?:\n|.)*?\n\n'
            question = re.search(pattern, question_1).group(0).strip()
            #print(f'Question: {question}')

            # If exists, find the text between ``` and ```  and put it in a variable called code
            pattern = r'```(?:\n|.)*?```'
            code = re.search(pattern, question_1, re.MULTILINE | re.DOTALL)
            if code:
                code = code.group(0).strip()
                #print(f'Code: {code}')

            # Get the options A) B) C) D) E) Before the <details> tag and After the Question 
            pattern = r'(?<=\n\n)(?:\n|.)*?(?=<details>)'
            options = re.search(pattern, question_1, re.MULTILINE | re.DOTALL)
            if options:
                options = options.group(0).strip()
                #print(f'Options: {options}')

            # Get the answer between </summary> and <br>
            pattern = r'(?<=</summary>)(?:\n|.)*?(?=<br>)'
            answer = re.search(pattern, question_1, re.MULTILINE | re.DOTALL)
            if answer:
                answer = answer.group(0).strip()
                #print(f'Answer: {answer}')
            else:
                # Get the answer between </summary> and </details>
                pattern = r'(?<=</summary>)(?:\n|.)*?(?=</details>)'
                answer = re.search(pattern, question_1, re.MULTILINE | re.DOTALL)
                if answer:
                    answer = answer.group(0).strip()
                    #print(f'Answer: {answer}')

            #Get the details between <br> and </details>
            pattern = r'(?<=<br>)(?:\n|.)*?(?=</details>)'
            details = re.search(pattern, question_1, re.MULTILINE | re.DOTALL)
            if details:
                details = details.group(0).strip()
                #print(f'Details: {details}')
        
            question_data = {
                'category': 1,
                'difficulty': '⭐',
                'number': question_number,
                'options': options,
                'question': question,
                'code': code,
                'answer': answer,
                'detailed_answer': details
            }
            results.append(question_data)

            # Get the second question wich starts with ⭐⭐ and ends before ⭐⭐⭐ (without ⭐⭐⭐)
            pattern = r'⭐⭐(?:\n|.)*?(?=⭐⭐⭐)'
            question_2 = re.search(pattern, question_block).group(0).strip()
            #print(f'Question 2: {question_2}')
                
            # get the first paragraph inside of question_2
            pattern = r'^(?:\n|.)*?\n\n'
            question = re.search(pattern, question_2).group(0).strip()
            #print(f'Question: {question}')

            # If exists, find the text between ``` and ```  and put it in a variable called code
            pattern = r'```(?:\n|.)*?```'
            code = re.search(pattern, question_2, re.MULTILINE | re.DOTALL)
            if code:
                code = code.group(0).strip()
                #print(f'Code: {code}')

            # Get the options A) B) C) D) E) Before the <details> tag and After the Question
            pattern = r'(?<=\n\n)(?:\n|.)*?(?=<details>)'
            options = re.search(pattern, question_2, re.MULTILINE | re.DOTALL)
            if options:
                options = options.group(0).strip()
                #print(f'Options: {options}')

            # Get the answer between </summary> and <br>
            pattern = r'(?<=</summary>)(?:\n|.)*?(?=<br>)'
            answer = re.search(pattern, question_2, re.MULTILINE | re.DOTALL)
            if answer:
                answer = answer.group(0).strip()
                #print(f'Answer: {answer}')
            else:
                # Get the answer between </summary> and </details>
                pattern = r'(?<=</summary>)(?:\n|.)*?(?=</details>)'
                answer = re.search(pattern, question_2, re.MULTILINE | re.DOTALL)
                if answer:
                    answer = answer.group(0).strip()
                    #print(f'Answer: {answer}')

            #Get the details between <br> and </details>
            pattern = r'(?<=<br>)(?:\n|.)*?(?=</details>)'
            details = re.search(pattern, question_2, re.MULTILINE | re.DOTALL)
            if details:
                details = details.group(0).strip()
                #print(f'Details: {details}')

            question_data = {
                'category': 1,
                'difficulty': '⭐⭐',
                'number': question_number,
                'options': options,
                'question': question,
                'code': code,
                'answer': answer,
                'detailed_answer': details
            }
            results.append(question_data)

            # Get the third question wich starts with ⭐⭐⭐ till the end of the file
            pattern = r'⭐⭐⭐(?:\n|.)*'
            
            question_3 = re.search(pattern, question_block).group(0).strip()
            #print(f'Question 3: {question_3}')

            # get the first paragraph inside of question_3
            pattern = r'^(?:\n|.)*?\n\n'
            question = re.search(pattern, question_3).group(0).strip()
            #print(f'Question: {question}')

            # If exists, find the text between ``` and ```  and put it in a variable called code
            pattern = r'```(?:\n|.)*?```'
            code = re.search(pattern, question_3, re.MULTILINE | re.DOTALL)
            if code:
                code = code.group(0).strip()
                #print(f'Code: {code}')

            # Get the options A) B) C) D) E) Before the <details> tag and After the Question
            pattern = r'(?<=\n\n)(?:\n|.)*?(?=<details>)'
            options = re.search(pattern, question_3, re.MULTILINE | re.DOTALL)
            if options:
                options = options.group(0).strip()
                #print(f'Options: {options}')

            # Get the answer between </summary> and <br>
            pattern = r'(?<=</summary>)(?:\n|.)*?(?=<br>)'
            answer = re.search(pattern, question_3, re.MULTILINE | re.DOTALL)
            if answer:
                answer = answer.group(0).strip()
                #print(f'Answer: {answer}')
            else:
                # Get the answer between </summary> and </details>
                pattern = r'(?<=</summary>)(?:\n|.)*?(?=</details>)'
                answer = re.search(pattern, question_3, re.MULTILINE | re.DOTALL)
                if answer:
                    answer = answer.group(0).strip()
                    #print(f'Answer: {answer}')

            #Get the details between <br> and </details>
            pattern = r'(?<=<br>)(?:\n|.)*?(?=</details>)'
            details = re.search(pattern, question_3, re.MULTILINE | re.DOTALL)
            if details:
                details = details.group(0).strip()
                #print(f'Details: {details}')

            question_data = {
                'category': 1,
                'difficulty': '⭐⭐⭐',
                'number': question_number,
                'options': options,
                'question': question,
                'code': code,
                'answer': answer,
                'detailed_answer': details
            }
            results.append(question_data)

    return results


if __name__ == '__main__':
    input_file = sys.argv[1]
    output_file = sys.argv[2]

    questions = process_file(input_file)

    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(questions, json_file, ensure_ascii=False, indent=2)
