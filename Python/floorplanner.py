# Zorg ervoor dat je alle stoelen hebt 
rows = [];
with open('test_input.txt', 'r') as f:
    rows = f.readlines()

# Krijg het aantal rijen
aantal_rijen = 0
for rij in rows:
    aantal_rijen += 1

# Zet alle stoelen in 1 grote lijst
seats = []
for seat in rows:
    seat = seat.strip('\n')
    # Krijg de lengte van de rij van stoelen
    aantal_stoelen_per_rij = 0
    for stoel in seat:
        aantal_stoelen_per_rij += 1
    for stoel in seat:
        seats.append(stoel);

# Nummer alle stoelen
stoel_nummers = list(range(0, aantal_rijen * aantal_stoelen_per_rij));

# Vul alle lege stoelen met mensen voor t=1
def vulAlleLegeStoelen():
    for num in stoel_nummers:
        if (seats[num] == 'L'):
            seats[num] = '#'

# Functie voor het bepalen van de buren van de desbetreffende stoel
def bepaalBurenVoorStoel(stoel_nummer):
    buren = []
    buren.append(stoel_nummer - 1);
    buren.append(stoel_nummer + 1);
    buren.append(stoel_nummer - aantal_stoelen_per_rij)
    buren.append(stoel_nummer - aantal_stoelen_per_rij - 1)
    buren.append(stoel_nummer - aantal_stoelen_per_rij + 1)
    buren.append(stoel_nummer + aantal_stoelen_per_rij - 1)
    buren.append(stoel_nummer + aantal_stoelen_per_rij)
    buren.append(stoel_nummer + aantal_stoelen_per_rij + 1)
    stoel_buren = []
    for buur in buren:
        if (buur > 0):
            stoel_buren.append(buur)
    
    return stoel_buren


def tijdstap():
    vulAlleLegeStoelen()
    for num in stoel_nummers:
        if(seats[num] == '#'):
            buren = bepaalBurenVoorStoel(num)
            buren_nummer = 0
            for buur in buren:
                if (seats[buur] == '#'):
                    buren_nummer += 1
                    # print(buren_nummer)
            if (buren_nummer >= 4):
                seats[num] = 'L'
            else:
                stoel_nummers.remove(num)
            print(stoel_nummers)
tijdstap()
# print(seats)
tijdstap()
# print(seats)
with open('new_seatplan2.txt', 'w') as f:
    for stoel in seats:
        f.write(stoel)
