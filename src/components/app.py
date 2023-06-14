from flask import Flask

app = Flask(__name__)


@app.route('/hello')
def hello():
    return 'Hello, World!'


if __name__ == '__main__':
    app.run()
# from flask import Flask, request
# import subprocess
# import os
# import tempfile

# app = Flask(__name__)


# @app.route('/upload', methods=['POST'])
# def upload_file():
#     file = request.files['file']
#     if file:
#         # Save the uploaded file to a temporary location
#         temp_file = tempfile.NamedTemporaryFile(delete=False)
#         file.save(temp_file.name)

#         # Execute the Python code in a subprocess
#         try:
#             result = subprocess.check_output(
#                 ['python', temp_file.name], stderr=subprocess.STDOUT)
#         except subprocess.CalledProcessError as e:
#             result = e.output

#         # Remove the temporary file
#         os.remove(temp_file.name)

#         # Return the result as a response
#         return result

#     return "No file uploaded"

# from flask import Flask, request
# import pandas as pd

# app = Flask(__name__)


# @app.route("/api/convert-excel-to-csv", methods=["POST"])
# def convert_excel_to_csv():
#     file = request.files["file"]
#     df = pd.read_excel(file)
#     csv_data = df.to_csv(index=False)
#     return csv_data


# if __name__ == "__main__":
#     app.run()

# from flask import Flask, request
# import os

# app = Flask(__name__)


# # @app.route('/sentiment-analysis', methods=['POST'])
# @app.route('/sentiment-analysis', methods=['POST'])
# def sentiment_analysis():
#     file = request.files['file']
#     # Perform sentiment analysis on the file
#     # You can use libraries like pandas, openpyxl, or xlrd to read the Excel file
#     # and apply your sentiment analysis algorithm

#     # Example: Read the file using pandas and print the contents
#     import pandas as pd
#     df = pd.read_excel(file)
#     print(df)

#     new_file_path = os.path.join('results.xlsx')
#     df.to_excel(new_file_path, index=False)

#     # Return a response indicating the analysis is completed
#     return 'Sentiment analysis completed'


# if __name__ == '__main__':
#     app.run()
