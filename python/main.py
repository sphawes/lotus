import os, json, shutil

class bay:
    'one unit of gowing capability. isolated environment. all plants in a bay are the same'

    def __init__(self, name, plant):
        self.name = name
        self.plant = plant

    def vegeType():
        print (self.plant)

    def barf():
        '''Barfs out all information about this bay'''
        print ("Bay Name: %r" % self.name)
        print ("Plant Type: %r" % self.plant)


print ("Welcome to the Genesis Greenhouse Project!")
#Check if db.json exists. if yes, load info and start monitoring. if no, create db.json and prompt user to input bay info
if os.path.exists("db.json"):
    #boot json data
    print ("Database file found, loading data...")

else:
    #create new db.json file
    print ("No database file found, generating a new one...")
    shutil.copy("default.json", "db.json")

#boot json file into "data" object
