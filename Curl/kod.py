from random import randint
import sys

MAX_users = 100 # maksymalna liczba userów
MAX_products = 10 # maksymalna liczba podręczników
MAX_units = 20 # maksymalna liczba rozdziałów
MAX_activities = 10 # maksymalna liczba zadań
MAX_attempts = 5 # maksymalna liczba podejść do zadania

COUNT_records = 100 # liczba rekordów do wygenerowania

curl = ''

# POST products
for i in range(1, MAX_products):
    json = '{\\\"product\\\":' + str(i) + '}'
    curl += 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://localhost:3000/api/products\n'

# POST units
for i in range (1, MAX_units):
    json = '{\\\"unit\\\":' + str(i) + '}'
    curl += 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://localhost:3000/api/units\n'

# POST activities
for i in range(1, MAX_activities):
    json = '{\\\"activity\\\":' + str(i) + '}'
    curl += 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://localhost:3000/api/activities\n'

# POST users
for i in range(1, MAX_users):
    json = '{\\\"user\\\":' + str(i) + '}'
    curl += 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://localhost:3000/api/users\n'

orig_stdout = sys.stdout
f = open('curl.txt', 'w')
sys.stdout = f
print(curl)
sys.stdout = orig_stdout
f.close()

orig_stdout = sys.stdout
f = open('curl-records.txt', 'w')
sys.stdout = f

# POST records
records = ''
for i in range(COUNT_records):
    user = str(randint(1, MAX_users))
    product = str(randint(1, MAX_products))
    unit = str(randint(1, MAX_units))
    activity = str(randint(1, MAX_activities))
    attempt_count = randint(1, MAX_attempts)
    duration = str(randint(99, 999))
    score = str(randint(99, 9999))

    for attempt in range(1, attempt_count):
        json = '{\\\"product\\\":' + product + ',\\\"unit\\\":' + unit + ',\\\"activity\\\":' + activity + ',\\\"user\\\":' + user + ',\\\"attempt\\\":' + str(attempt) + ',\\\"duration\\\":' + duration + ',\\\"score\\\":' + score + '}'
        record = 'curl -H \"Content-Type: application/json\" -X POST -d \"' + json + '\" http://localhost:3000/api/records'
        print(record)

sys.stdout = orig_stdout
f.close()