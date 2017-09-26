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
GENERATE_users = False # plik users.json
GENERATE_products = False # plik products.json
GENERATE_units = False # plik units.json
GENERATE_activities = False # plik activities.json

# wygenerowane records beda w pliku records.json
GENERATE_records = True 
COUNT_records = 1000 # liczba rekordow do wygenerowania

# JSON products
if GENERATE_products:
    json = '['
    for i in range(MIN_products, MAX_products):
        json += '{\"product\":' + str(i) + '},'
    json += '{\"product\":' + str(MAX_products) + '}]'

    orig_stdout = sys.stdout
    f = open('products.json', 'w')
    sys.stdout = f
    print(json)
    sys.stdout = orig_stdout
    f.close()

# JSON units
if GENERATE_units:
    json = '['
    for i in range (MIN_units, MAX_units):
        json += '{\"unit\":' + str(i) + '},'
    json += '{\"unit\":' + str(MAX_units) + '}]'

    orig_stdout = sys.stdout
    f = open('units.json', 'w')
    sys.stdout = f
    print(json)
    sys.stdout = orig_stdout
    f.close()

# JSON activities
if GENERATE_activities:
    json = '['
    for i in range(MIN_activities, MAX_activities):
        json += '{\"activity\":' + str(i) + '},'
    json += '{\"activity\":' + str(MAX_activities) + '}]'

    orig_stdout = sys.stdout
    f = open('activities.json', 'w')
    sys.stdout = f
    print(json)
    sys.stdout = orig_stdout
    f.close()

# JSON users
if GENERATE_users:
    json = '['
    for i in range(MIN_users, MAX_users):
        json += '{\"user\":' + str(i) + '},'
    json += '{\"user\":' + str(MAX_users) + '}]'

    orig_stdout = sys.stdout
    f = open('users.json', 'w')
    sys.stdout = f
    print(json)
    sys.stdout = orig_stdout
    f.close()

# JSON records
if GENERATE_records:

    orig_stdout = sys.stdout
    f = open('records.json', 'w')
    sys.stdout = f

    print('[')

    for i in range(COUNT_records):
        user = str(randint(MIN_users, MAX_users))
        product = str(randint(MIN_products, MAX_products))
        unit = str(randint(MIN_units, MAX_units))
        activity = str(randint(MIN_activities, MAX_activities))
        duration = str(randint(99, 999))
        score = str(randint(99, 999))

        json = '{\"product\":' + product + ',\"unit\":' + unit + ',\"activity\":' + activity + ',\"user\":' + user + ',\"duration\":' + duration + ',\"score\":' + score + '},'
        print(json)

    # ostatnia linijka z jsonem bez przecinka
    user = str(randint(MIN_users, MAX_users))
    product = str(randint(MIN_products, MAX_products))
    unit = str(randint(MIN_units, MAX_units))
    activity = str(randint(MIN_activities, MAX_activities))
    duration = str(randint(99, 999))
    score = str(randint(99, 999))

    json = '{\"product\":' + product + ',\"unit\":' + unit + ',\"activity\":' + activity + ',\"user\":' + user + ',\"duration\":' + duration + ',\"score\":' + score + '}'
    print(json)

    print(']')
    sys.stdout = orig_stdout
    f.close()