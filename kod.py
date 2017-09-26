from random import randint
import sys

adres_ip = 'localhost' # adres serwera

# PREDZIAL LICZBOWY z zakresu (MIN, MAX) do wygenerowania
MIN_users = 1 # userow
MIN_products = 1 # podrecznikow
MIN_units = 1 # rozdzialow
MIN_activities = 1 # zadan

MAX_users = 1000
MAX_products = 1000
MAX_units = 100
MAX_activities = 100

# czy wygenerowac ponizsze
GENERATE_users = False
GENERATE_products = False
GENERATE_units = False
GENERATE_activities = False

# wygenerowane records beda w pliku curl-records.txt
GENERATE_records = True 
COUNT_records = 1000 # liczba rekordow do wygenerowania

curl = ''

# POST products
if GENERATE_products:
    for i in range(MIN_products, MAX_products + 1):
        json = '{\\\"product\\\":' + str(i) + '}'
        curl += 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://' + adres_ip + ':3000/api/products\n'

# POST units
if GENERATE_units:
    for i in range (MIN_units, MAX_units + 1):
        json = '{\\\"unit\\\":' + str(i) + '}'
        curl += 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://' + adres_ip + ':3000/api/units\n'

# POST activities
if GENERATE_activities:
    for i in range(MIN_activities, MAX_activities + 1):
        json = '{\\\"activity\\\":' + str(i) + '}'
        curl += 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://' + adres_ip + ':3000/api/activities\n'

# POST users
if GENERATE_users:
    for i in range(MIN_users, MAX_users + 1):
        json = '{\\\"user\\\":' + str(i) + '}'
        curl += 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://' + adres_ip + ':3000/api/users\n'

if GENERATE_users or GENERATE_activities or GENERATE_units or GENERATE_products:
    orig_stdout = sys.stdout
    f = open('curl.txt', 'w')
    sys.stdout = f
    print(curl)
    sys.stdout = orig_stdout
    f.close()

# POST records
if GENERATE_records:

    orig_stdout = sys.stdout
    f = open('curl-records.txt', 'w')
    sys.stdout = f

    records = ''

    for i in range(COUNT_records):
        user = str(randint(1, MAX_users))
        product = str(randint(1, MAX_products))
        unit = str(randint(1, MAX_units))
        activity = str(randint(1, MAX_activities))
        duration = str(randint(99, 999))
        score = str(randint(99, 9999))

        json = '{\\\"product\\\":' + product + ',\\\"unit\\\":' + unit + ',\\\"activity\\\":' + activity + ',\\\"user\\\":' + user + ',\\\"duration\\\":' + duration + ',\\\"score\\\":' + score + '}'
        record = 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://' + adres_ip + ':3000/api/records'
        print(record)

    sys.stdout = orig_stdout
    f.close()