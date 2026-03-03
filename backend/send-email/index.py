import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта НаймLab на почту naimlab@mail.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '—')
    company = body.get('company', '—')
    phone = body.get('phone', '—')
    task = body.get('task', '—')

    smtp_host = 'smtp.mail.ru'
    smtp_port = 465
    sender = 'naimlab@mail.ru'
    recipient = 'naimlab@mail.ru'
    password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = sender
    msg['To'] = recipient

    html = f"""
    <h2>Новая заявка с сайта НаймLab</h2>
    <table>
      <tr><td><b>Имя:</b></td><td>{name}</td></tr>
      <tr><td><b>Компания:</b></td><td>{company}</td></tr>
      <tr><td><b>Телефон:</b></td><td>{phone}</td></tr>
      <tr><td><b>Задача:</b></td><td>{task}</td></tr>
    </table>
    """
    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(sender, password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
