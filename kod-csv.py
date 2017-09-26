from random import randint
import sys

adres_ip = 'localhost' # adres serwera

# PRZEDZIAL LICZBOWY z zakresu (MIN, MAX) do wygenerowania/wylosowania id
MIN_users = 1 # userow
MIN_products = 1 # podrecznikow
MIN_units = 1 # rozdzialow
MIN_activities = 1 # zadan

MAX_users = 1000
MAX_products = 100
MAX_units = 100
MAX_activities = 100

# czy wygenerowac ponizsze
GENERATE_users = False # plik users.csv
GENERATE_products = False # plik products.csv
GENERATE_units = False # plik units.csv
GENERATE_activities = False # plik activities.csv

# wygenerowane records beda w pliku records.csv
GENERATE_records = True 
COUNT_records = 1000 # liczba rekordow do wygenerowania
MAX_attempts = 5 # maksymalna liczba podejsc

# JSON products
if GENERATE_products:
    orig_stdout = sys.stdout
    f = open('products.csv', 'w')
    sys.stdout = f
    print('product_id')
    for i in range(MIN_products, MAX_products + 1):
        print(i)

    sys.stdout = orig_stdout
    f.close()

# JSON units
if GENERATE_units:
    orig_stdout = sys.stdout
    f = open('units.csv', 'w')
    sys.stdout = f
    print('unit_id')
    
    for i in range(MIN_units, MAX_units + 1):
        print(i)

    sys.stdout = orig_stdout
    f.close()

# JSON activities
if GENERATE_activities:
    orig_stdout = sys.stdout
    f = open('activities.csv', 'w')
    sys.stdout = f
    print('activity_id')
    
    for i in range(MIN_activities, MAX_activities + 1):
        print(i)

    sys.stdout = orig_stdout
    f.close()

# JSON users
if GENERATE_users:
    orig_stdout = sys.stdout
    f = open('users.csv', 'w')
    sys.stdout = f
    print('user_id')
    
    for i in range(MIN_users, MAX_users + 1):
        print(i)

    sys.stdout = orig_stdout
    f.close()

# JSON records
if GENERATE_records:

    orig_stdout = sys.stdout
    f = open('records.csv', 'w')
    sys.stdout = f
    print('product_id,unit_id,activity_id,user_id,attempt_run,time_on_activity_duration,score')

    for i in range(COUNT_records):
        user = str(randint(MIN_users, MAX_users))
        product = str(randint(MIN_products, MAX_products))
        unit = str(randint(MIN_units, MAX_units))
        activity = str(randint(MIN_activities, MAX_activities))
        duration = str(randint(99, 999))
        score = str(randint(99, 999))
        attempt = randint(1, MAX_attempts)

        for attempt_run in range (attempt):
            print(product + ',' + unit + ',' + activity + ',' + user + ',' + str(attempt_run) + ',' + duration + ',' + score)

    sys.stdout = orig_stdout
    f.close()