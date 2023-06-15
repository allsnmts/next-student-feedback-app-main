import sys
import pandas as pd
import os


def perform_sentiment_analysis(file_path):
    df = pd.read_excel(file_path)

    # Select the desired columns
    selected_columns = ['ID', 'Feedback', 'Comment/Suggestion for Improvement']
    df = df[selected_columns]

    # Save the processed data to a new CSV file
    new_file_path = os.path.join('/uploads/results.csv')
    df.to_csv(new_file_path, index=False)


# Get the file path from the command line arguments
file_path = sys.argv[1]

# Call the sentiment analysis function
perform_sentiment_analysis(file_path)
