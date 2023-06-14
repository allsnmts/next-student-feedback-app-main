from flask import Flask, request
import pandas as pd

app = Flask(__name__)

@app.route('/run-python-code', methods=['POST'])
def run_python_code():
    # Get the uploaded file from the request
    file = request.files['file']

    # Read the file using pandas
    df = pd.read_csv(file)

    # Perform your desired operations on the dataframe
    # ...

    # Convert the updated dataframe to JSON
    print('Python executed')

    # Return the result as a JSON response
    return 'Python executed'

# from flask import Flask, request
# import pandas as pd

# app = Flask(__name__)

# @app.route('/run-python-code', methods=['POST'])
# def run_python_code():
#     file = request.files['file']
    
#     # Process the file and execute your Python code here
#     # For example, you can save the file and run a Python script using subprocess
    
#     # Save the file
#     file.save('uploaded_file.xlsx')
#     print('File saved')
#     # Run the Python script using subprocess
#     import subprocess
#     subprocess.run(['python', 'sentiment_analysis.py', 'uploaded_file.xlsx'], capture_output=True)
    
#     return 'Python code executed successfully'

# if __name__ == '__main__':
#     app.run()
