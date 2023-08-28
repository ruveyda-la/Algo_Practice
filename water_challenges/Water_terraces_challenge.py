


# Parameters
#         - values will be 1 or 2
#         - the same value may be given consecutively
#
#         - there may not be an ending or starting wall.




def count_water_units(terraces):

    units=0
    temp_units=0
    started = False

    arrTerraces=[int(terrace) for terrace in terraces]

    for terrace in arrTerraces:
        if terrace == 1 and started:
            temp_units += 1
        elif started:
            units += temp_units
            temp_units = 0
        elif terrace == 2:
            started = True
    return units
        


# tests
print (f"test 1.1: {'good' if count_water_units('212') == 1 else 'failed'}")
print (f"test 1.2: {'good' if count_water_units('2122111') == 1 else 'failed'}")
print (f"test 2.2: {'good' if count_water_units('2122112') == 3 else 'failed'}")
print (f"test 1.3: {'good' if count_water_units('2112111') == 2 else 'failed'}")
print (f"test 1.4: {'good' if count_water_units('12111') == 0 else 'failed'}")
print (f"test 1.4: {'good' if count_water_units('12121') == 1 else 'failed'}")



