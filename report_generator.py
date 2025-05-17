
# backend/report_generator.py
import datetime

def generate_report(user_id):
    today = datetime.date.today()
    report = f"Weekly report for User {user_id} - Generated on {today}\n"
    report += "Task completion: 85%\n"
    report += "Pending tasks: 3\n"
    report += "Completed tasks: 17\n"
    return report

if __name__ == '__main__':
    report = generate_report(1)
    with open("weekly_report.txt", "w") as f:
        f.write(report)
    print("Report generated.")
