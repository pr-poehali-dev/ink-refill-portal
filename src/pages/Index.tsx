import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d8da1f19-6d51-4761-b8ba-72bee78f3702/files/634d30cb-795e-4473-ae6e-226670215197.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс-лист", href: "#prices" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const BRANDS = ["Все", "HP"];

const PRICE_DATA = [
  { brand: "HP", printer: "Color Pro 300 M351/М375/400 475/M451", cartridge: "CE411X Cyan", price: 1800 },
  { brand: "HP", printer: "LJ Pro 4003dw/4003dn/MFP 4103fdw/4103fdn", cartridge: "W1510X", price: 1500 },
  { brand: "HP", printer: "Laser 107a/w/135w/a/137fnw", cartridge: "W1107A", price: 700 },
  { brand: "HP", printer: "Color Pro M252/M274/M277", cartridge: "CF403X Magenta", price: 1450 },
  { brand: "HP", printer: "Color Pro M252/M274/M277", cartridge: "CF402X Yellow", price: 1450 },
  { brand: "HP", printer: "Color Pro M252/M274/M277", cartridge: "CF401X Cyan", price: 1450 },
  { brand: "HP", printer: "Color Pro M252/M274/M277", cartridge: "CF403A Magenta", price: 1450 },
  { brand: "HP", printer: "Color Pro M252/M274/M277", cartridge: "CF402A Yellow", price: 1450 },
  { brand: "HP", printer: "Color Pro M252/M274/M277", cartridge: "CF401A Cyan", price: 1450 },
  { brand: "HP", printer: "Color Pro M255/MFP M282/M283", cartridge: "W2213X Magenta", price: 1600 },
  { brand: "HP", printer: "Color Pro M255/MFP M282/M283", cartridge: "W2212X Yellow", price: 1600 },
  { brand: "HP", printer: "Color Pro M255/MFP M282/M283", cartridge: "W2211X Cyan", price: 1600 },
  { brand: "HP", printer: "Color Pro M255/MFP M282/M283", cartridge: "W2210X Black", price: 1600 },
  { brand: "HP", printer: "Color Pro M255/MFP M282/M283", cartridge: "W2210A Black", price: 1600 },
  { brand: "HP", printer: "Color LJ 150a/150nw/MFP 178nw/179fnw", cartridge: "117A W2073A Magenta", price: 1400 },
  { brand: "HP", printer: "Color LJ 150a/150nw/MFP 178nw/179fnw", cartridge: "117A W2072A Yellow", price: 1400 },
  { brand: "HP", printer: "Color LJ 150a/150nw/MFP 178nw/179fnw", cartridge: "117A W2071A Cyan", price: 1400 },
  { brand: "HP", printer: "Color LJ 150a/150nw/MFP 178nw/179fnw", cartridge: "117A W2070A Black", price: 1400 },
  { brand: "HP", printer: "Color Pro M252/M274/M277", cartridge: "CF400X Black", price: 1450 },
  { brand: "HP", printer: "Color Pro M252/M274/M277", cartridge: "CF400А Black", price: 1450 },
  { brand: "HP", printer: "M236dw/M236sdw/M211dw/M211d", cartridge: "W1360X (136X)", price: 900 },
  { brand: "HP", printer: "M236dw/M236sdw/M211dw/M211d", cartridge: "W1360A (136A)", price: 700 },
  { brand: "HP", printer: "Color Pro M155a/MFP M182n/M183fw", cartridge: "W2411A", price: 1400 },
  { brand: "HP", printer: "Color Pro M155a/MFP M182n/M183fw", cartridge: "W2413A", price: 1400 },
  { brand: "HP", printer: "Color Pro M155a/MFP M182n/M183fw", cartridge: "W2412A", price: 1400 },
  { brand: "HP", printer: "Color Pro M155a/MFP M182n/M183fw", cartridge: "W2410A", price: 1400 },
  { brand: "HP", printer: "Pro M254dw/nw/M280nw/M281fdw/fdn", cartridge: "CF543X", price: 1600 },
  { brand: "HP", printer: "Pro M254dw/nw/M280nw/M281fdw/fdn", cartridge: "CF541X", price: 1600 },
  { brand: "HP", printer: "Pro M254dw/nw/M280nw/M281fdw/fdn", cartridge: "CF542X", price: 1600 },
  { brand: "HP", printer: "Pro M254dw/nw/M280nw/M281fdw/fdn", cartridge: "CF540X", price: 1600 },
  { brand: "HP", printer: "Pro M254dw/nw/M280nw/M281fdw/fdn", cartridge: "CF542A", price: 1300 },
  { brand: "HP", printer: "Pro M254dw/nw/M280nw/M281fdw/fdn", cartridge: "CF541A", price: 1300 },
  { brand: "HP", printer: "Pro M254dw/nw/M280nw/M281fdw/fdn", cartridge: "CF540A", price: 1300 },
  { brand: "HP", printer: "Pro M254dw/nw/M280nw/M281fdw/fdn", cartridge: "CF543A", price: 1300 },
  { brand: "HP", printer: "Pro M104/LJ Pro MFP M132", cartridge: "CF218X", price: 1250 },
  { brand: "HP", printer: "Pro M104/LJ Pro MFP M132", cartridge: "CF218A", price: 850 },
  { brand: "HP", printer: "P1102/M1132/M1136/M1212/1214/M1217", cartridge: "CE285А", price: 700 },
  { brand: "HP", printer: "M4345", cartridge: "Q5945X", price: 1600 },
  { brand: "HP", printer: "M4345", cartridge: "Q5945А", price: 1250 },
  { brand: "HP", printer: "Laser 107a/w/135w/a/137fnw", cartridge: "106А", price: 700 },
  { brand: "HP", printer: "Laser 107a/w/135w/a/137fnw", cartridge: "W1106A", price: 700 },
  { brand: "HP", printer: "Laser 107a/w/135w/a/137fnw", cartridge: "W1105A", price: 950 },
  { brand: "HP", printer: "Enterprise 700 M712dn/M712xh/M725", cartridge: "CF214X", price: 2100 },
  { brand: "HP", printer: "Enterprise 700 M712dn/M712xh/M725", cartridge: "CF214A", price: 1650 },
  { brand: "HP", printer: "Color Pro M476", cartridge: "CF380X Black", price: 1450 },
  { brand: "HP", printer: "Color Pro M476", cartridge: "CF383A Magenta", price: 1450 },
  { brand: "HP", printer: "Color Pro M476", cartridge: "CF382A Yellow", price: 1450 },
  { brand: "HP", printer: "Color Pro M476", cartridge: "CF381A Cyan", price: 1450 },
  { brand: "HP", printer: "Color Pro 500 M551/M570/M575", cartridge: "CE400X Black", price: 2450 },
  { brand: "HP", printer: "Color Pro 500 M551/M570/M575", cartridge: "CE403A Magenta", price: 2050 },
  { brand: "HP", printer: "Color Pro 500 M551/M570/M575", cartridge: "CE402A Yellow", price: 2050 },
  { brand: "HP", printer: "Color Pro 500 M551/M570/M575", cartridge: "CE401A Cyan", price: 2050 },
  { brand: "HP", printer: "Color Pro 500 M551/M570/M575", cartridge: "CE400A Black", price: 2050 },
  { brand: "HP", printer: "Color Pro 300 M351/М375/400 475/M451", cartridge: "CE412A Yellow", price: 1450 },
  { brand: "HP", printer: "Color Pro 300 M351/М375/400 475/M451", cartridge: "CE411A Cyan", price: 1450 },
  { brand: "HP", printer: "Color Pro 300 M351/М375/400 475/M451", cartridge: "CE410A Black", price: 1450 },
  { brand: "HP", printer: "Color Pro 300 M351/М375/400 475/M451", cartridge: "CE410X Black", price: 1800 },
  { brand: "HP", printer: "Color Pro 300 M351/М375/400 475/M451", cartridge: "CE413A Magenta", price: 1450 },
  { brand: "HP", printer: "Color Pro 200 M276/M251", cartridge: "CF210A Black", price: 1450 },
  { brand: "HP", printer: "Color Pro 200 M276/M251", cartridge: "CF213A Magenta", price: 1450 },
  { brand: "HP", printer: "Color Pro 200 M276/M251", cartridge: "CF212A Yellow", price: 1450 },
  { brand: "HP", printer: "Color Pro 200 M276/M251", cartridge: "CF211A Cyan", price: 1450 },
  { brand: "HP", printer: "Color Pro 200 M276/M251", cartridge: "CF210X Black", price: 1450 },
  { brand: "HP", printer: "Color M454/M455/MFP M479", cartridge: "W2033A Magenta", price: 1600 },
  { brand: "HP", printer: "Color M454/M455/MFP M479", cartridge: "W2032A Yellow", price: 1600 },
  { brand: "HP", printer: "Color M454/M455/MFP M479", cartridge: "W2031A Cyan", price: 1600 },
  { brand: "HP", printer: "Color M454/M455/MFP M479", cartridge: "W2030A Black", price: 1600 },
  { brand: "HP", printer: "Color LJ5500/5550", cartridge: "C9733A Magenta", price: 3100 },
  { brand: "HP", printer: "Color LJ5500/5550", cartridge: "C9732A Yellow", price: 3100 },
  { brand: "HP", printer: "Color LJ5500/5550", cartridge: "C9730A Black", price: 3100 },
  { brand: "HP", printer: "Color LJ5500/5550", cartridge: "C9731A Cyan", price: 3100 },
  { brand: "HP", printer: "Color LJ Enterprise 700 M775", cartridge: "CE343А Magenta", price: 2650 },
  { brand: "HP", printer: "Color LJ Enterprise 700 M775", cartridge: "CE342A Yellow", price: 2650 },
  { brand: "HP", printer: "Color LJ Enterprise 700 M775", cartridge: "CE341A Cyan", price: 2650 },
  { brand: "HP", printer: "Color LJ Enterprise 700 M775", cartridge: "CE340A Black", price: 2800 },
  { brand: "HP", printer: "Color CP3525/CP3530", cartridge: "CE252A Yellow", price: 1800 },
  { brand: "HP", printer: "Color CP3525/CP3530", cartridge: "CE251A Cyan", price: 1800 },
  { brand: "HP", printer: "Color CP3525/CP3530", cartridge: "CE250A Black", price: 1800 },
  { brand: "HP", printer: "Color CP3525/CP3530", cartridge: "CE253A Magenta", price: 1800 },
  { brand: "HP", printer: "Color CP2020/CP2025/CM2320", cartridge: "CC533A", price: 1400 },
  { brand: "HP", printer: "Color CP2020/CP2025/CM2320", cartridge: "CC532A", price: 1400 },
  { brand: "HP", printer: "Color CP2020/CP2025/CM2320", cartridge: "CC531A", price: 1400 },
  { brand: "HP", printer: "Color CP2020/CP2025/CM2320", cartridge: "CC530A", price: 1400 },
  { brand: "HP", printer: "Pro M501/M506dn/M506x/M527dn/M527f/M527c", cartridge: "CF287X", price: 1800 },
  { brand: "HP", printer: "Pro M501/M506dn/M506x/M527dn/M527f/M527c", cartridge: "CF287A", price: 1450 },
  { brand: "HP", printer: "Pro M435NW/M701/M706", cartridge: "CZ192A", price: 1450 },
  { brand: "HP", printer: "Pro M403/427", cartridge: "CF228Х", price: 1600 },
  { brand: "HP", printer: "Pro M403/427", cartridge: "CF228A", price: 1200 },
  { brand: "HP", printer: "Pro M102a/w/M129a/M130a/M130fw/M130fn", cartridge: "CF217A", price: 650 },
  { brand: "HP", printer: "Enterprise 800/M806/M830", cartridge: "CF325X", price: 3500 },
  { brand: "HP", printer: "Color Pro M153/176/177", cartridge: "CF352A", price: 1450 },
  { brand: "HP", printer: "Color Pro M153/176/177", cartridge: "CF351A", price: 1450 },
  { brand: "HP", printer: "Color Pro M153/176/177", cartridge: "CF350A", price: 1450 },
  { brand: "HP", printer: "Color Pro M153/176/177", cartridge: "CF353A", price: 1450 },
  { brand: "HP", printer: "Color LJ5520/5525/Enterprise M750", cartridge: "CE272A", price: 2400 },
  { brand: "HP", printer: "Color LJ5520/5525/Enterprise M750", cartridge: "CE271A", price: 2400 },
  { brand: "HP", printer: "Color LJ5520/5525/Enterprise M750", cartridge: "CE270A", price: 2400 },
  { brand: "HP", printer: "Color LJ5520/5525/Enterprise M750", cartridge: "CE273A", price: 2400 },
  { brand: "HP", printer: "Color LJ CP5220/CP5225", cartridge: "CE742A", price: 2850 },
  { brand: "HP", printer: "Color LJ CP5220/CP5225", cartridge: "CE741A", price: 2850 },
  { brand: "HP", printer: "Color LJ CP5220/CP5225", cartridge: "CE740A", price: 2850 },
  { brand: "HP", printer: "Color LJ CP5220/CP5225", cartridge: "CE743A", price: 2850 },
  { brand: "HP", printer: "Color LJ2550/2820/2840", cartridge: "Q3962A", price: 1800 },
  { brand: "HP", printer: "Color LJ2550/2820/2840", cartridge: "Q3961A", price: 1800 },
  { brand: "HP", printer: "Color LJ2550/2820/2840", cartridge: "Q3960A", price: 1800 },
  { brand: "HP", printer: "Color LJ2550/2820/2840", cartridge: "Q3963A", price: 1800 },
  { brand: "HP", printer: "Color LJ1500/2500/2820/2840", cartridge: "C9702A", price: 1800 },
  { brand: "HP", printer: "Color LJ1500/2500/2820/2840", cartridge: "C9701A", price: 1800 },
  { brand: "HP", printer: "Color LJ1500/2500/2820/2840", cartridge: "C9700A", price: 1800 },
  { brand: "HP", printer: "Color LJ1500/2500/2820/2840", cartridge: "C9703A", price: 1800 },
  { brand: "HP", printer: "Color LJ1215/1210/1510/1515/1518/CM1312", cartridge: "CB542A", price: 1500 },
  { brand: "HP", printer: "Color LJ1215/1210/1510/1515/1518/CM1312", cartridge: "CB541A", price: 1500 },
  { brand: "HP", printer: "Color LJ1215/1210/1510/1515/1518/CM1312", cartridge: "CB540A", price: 1500 },
  { brand: "HP", printer: "Color LJ1215/1210/1510/1515/1518/CM1312", cartridge: "CB543A", price: 1500 },
  { brand: "HP", printer: "Color LJ Enterprise MFP M681/M682", cartridge: "CF473X Magenta", price: 2850 },
  { brand: "HP", printer: "Color LJ Enterprise MFP M681/M682", cartridge: "CF472X Yellow", price: 2850 },
  { brand: "HP", printer: "Color LJ Enterprise MFP M681/M682", cartridge: "CF471X Cyan", price: 2850 },
  { brand: "HP", printer: "Color LJ Enterprise MFP M681/M682", cartridge: "CF470X Black", price: 2850 },
  { brand: "HP", printer: "Color LJ Enterprise MFP M681/M682", cartridge: "CF473A Magenta", price: 2650 },
  { brand: "HP", printer: "Color LJ Enterprise MFP M681/M682", cartridge: "CF472A Yellow", price: 2250 },
  { brand: "HP", printer: "Color LJ Enterprise MFP M681/M682", cartridge: "CF471A Cyan", price: 2250 },
  { brand: "HP", printer: "Color LJ Enterprise MFP M681/M682", cartridge: "CF470A Black", price: 2250 },
  { brand: "HP", printer: "Color LJ Enterprise M652/M653", cartridge: "CF453A Magenta", price: 2200 },
  { brand: "HP", printer: "Color LJ Enterprise M652/M653", cartridge: "CF452A Yellow", price: 2200 },
  { brand: "HP", printer: "Color LJ Enterprise M652/M653", cartridge: "CF451A Cyan", price: 2200 },
  { brand: "HP", printer: "Color LJ Enterprise M652/M653", cartridge: "CF450A Black", price: 2200 },
  { brand: "HP", printer: "Color CP4025/CP4525/CM4540", cartridge: "CE262A", price: 2400 },
  { brand: "HP", printer: "Color CP4025/CP4525/CM4540", cartridge: "CE261A", price: 2400 },
  { brand: "HP", printer: "Color CP4025/CP4525/CM4540", cartridge: "CE260A", price: 2400 },
  { brand: "HP", printer: "Color CP4025/CP4525/CM4540", cartridge: "CE263A", price: 2400 },
  { brand: "HP", printer: "Color CP4025/CP4525/CM4540", cartridge: "CE260X", price: 2400 },
  { brand: "HP", printer: "Color CP4005", cartridge: "CB401A", price: 1900 },
  { brand: "HP", printer: "Color CP4005", cartridge: "CB402A", price: 1900 },
  { brand: "HP", printer: "Color CP4005", cartridge: "CB403A", price: 1900 },
  { brand: "HP", printer: "Color CP4005", cartridge: "CB400A", price: 1900 },
  { brand: "HP", printer: "Color CP1025/Pro 100 M175/M275", cartridge: "CE312A", price: 1400 },
  { brand: "HP", printer: "Color CP1025/Pro 100 M175/M275", cartridge: "CE311A", price: 1400 },
  { brand: "HP", printer: "Color CP1025/Pro 100 M175/M275", cartridge: "CE310A", price: 1400 },
  { brand: "HP", printer: "Color CP1025/Pro 100 M175/M275", cartridge: "CE313A", price: 1400 },
  { brand: "HP", printer: "Color CM1415/CP1525", cartridge: "CE322A", price: 1500 },
  { brand: "HP", printer: "Color CM1415/CP1525", cartridge: "CE321A", price: 1500 },
  { brand: "HP", printer: "Color CM1415/CP1525", cartridge: "CE320A", price: 1500 },
  { brand: "HP", printer: "Color CM1415/CP1525", cartridge: "CE323A", price: 1500 },
  { brand: "HP", printer: "Pro M15/M16/MFP M28a/M29", cartridge: "CF244A", price: 700 },
  { brand: "HP", printer: "Pro M12/MFP M26", cartridge: "CF279A", price: 650 },
  { brand: "HP", printer: "Neverstop Laser 1000a/w/1200a/w", cartridge: "W1103A", price: 2100 },
  { brand: "HP", printer: "Pro M203/MFP M227", cartridge: "CF230A", price: 850 },
  { brand: "HP", printer: "Pro M203/MFP M227", cartridge: "CF230X", price: 1250 },
  { brand: "HP", printer: "M304/M404/M406/MFP M428/M430", cartridge: "CF259X", price: 1550 },
  { brand: "HP", printer: "M304/M404/M406/MFP M428/M430", cartridge: "CF259A", price: 1050 },
  { brand: "HP", printer: "Pro M377/M452/M477", cartridge: "CF412X", price: 1800 },
  { brand: "HP", printer: "Pro M377/M452/M477", cartridge: "CF411X", price: 1800 },
  { brand: "HP", printer: "Pro M377/M452/M477", cartridge: "CF410X", price: 1800 },
  { brand: "HP", printer: "Pro M377/M452/M477", cartridge: "CF413X", price: 1800 },
  { brand: "HP", printer: "Pro M377/M452/M477", cartridge: "CF413A", price: 1400 },
  { brand: "HP", printer: "Pro M377/M452/M477", cartridge: "CF412A", price: 1400 },
  { brand: "HP", printer: "Pro M377/M452/M477", cartridge: "CF411A", price: 1400 },
  { brand: "HP", printer: "Pro M377/M452/M477", cartridge: "CF410A", price: 1400 },
  { brand: "HP", printer: "Ultra MFP M230fdw", cartridge: "CF231A", price: 1200 },
  { brand: "HP", printer: "Pro M402/M426", cartridge: "CF226Х", price: 1500 },
  { brand: "HP", printer: "Pro M402/M426", cartridge: "CF226A", price: 1000 },
  { brand: "HP", printer: "Pro M125/M126/M127/M201/M225", cartridge: "CF283Х", price: 900 },
  { brand: "HP", printer: "Pro M125/M126/M127/M201/M225", cartridge: "CF283A", price: 700 },
  { brand: "HP", printer: "Pro 400 M401/Pro 400 M425", cartridge: "CF280X", price: 1000 },
  { brand: "HP", printer: "Pro 400 M401/Pro 400 M425", cartridge: "CF280A", price: 700 },
  { brand: "HP", printer: "P4010/P4014/P4015/P4515", cartridge: "CC364A", price: 1300 },
  { brand: "HP", printer: "P4010/P4014/P4015/P4515", cartridge: "CC364X", price: 1800 },
  { brand: "HP", printer: "P3010/P3015/P500/M525/M521", cartridge: "CE255A", price: 1000 },
  { brand: "HP", printer: "P3010/P3015/500 M525/M521", cartridge: "CE255X", price: 1400 },
  { brand: "HP", printer: "P3005/M3027/M3035", cartridge: "Q7551X", price: 1250 },
  { brand: "HP", printer: "P3005/M3027/M3035", cartridge: "Q7551A", price: 850 },
  { brand: "HP", printer: "P2050/P2055", cartridge: "CE505X", price: 1000 },
  { brand: "HP", printer: "P2035/P2050/P2055", cartridge: "CE505A", price: 700 },
  { brand: "HP", printer: "P2014/P2015/M2727", cartridge: "Q7553X", price: 1000 },
  { brand: "HP", printer: "P2014/P2015/M2727", cartridge: "Q7553A", price: 700 },
  { brand: "HP", printer: "LJ P1566/P1606/P1530/M1536", cartridge: "CE278A", price: 700 },
  { brand: "HP", printer: "P1505/M1522/M1120", cartridge: "CB436A", price: 700 },
  { brand: "HP", printer: "P1005/P1006/P1007/P1008", cartridge: "CB435A", price: 700 },
  { brand: "HP", printer: "M608/609/MFP M631", cartridge: "CF237A", price: 1250 },
  { brand: "HP", printer: "M608/609/MFP M631", cartridge: "CF237X", price: 1900 },
  { brand: "HP", printer: "M604/605/606/MFP M630", cartridge: "CF281X", price: 1850 },
  { brand: "HP", printer: "M604/605/606/MFP M630", cartridge: "CF281A", price: 1200 },
  { brand: "HP", printer: "M5025/M5035", cartridge: "Q7570A", price: 1600 },
  { brand: "HP", printer: "M4555/M601/M602/M603", cartridge: "CE390X", price: 1600 },
  { brand: "HP", printer: "M4555/M601/M602/M603", cartridge: "CE390A", price: 1200 },
  { brand: "HP", printer: "Color LJ M552/M553/M557", cartridge: "CF361X Cyan", price: 2200 },
  { brand: "HP", printer: "Color LJ M552/M553/M557", cartridge: "CF362X Yellow", price: 2200 },
  { brand: "HP", printer: "Color LJ M552/M553/M557", cartridge: "CF363X Magenta", price: 2200 },
  { brand: "HP", printer: "Color LJ M552/M553/M557", cartridge: "CF360X Black", price: 2200 },
  { brand: "HP", printer: "Color LJ M552/M553/M557", cartridge: "CF363A Magenta", price: 1800 },
  { brand: "HP", printer: "Color LJ M552/M553/M557", cartridge: "CF362A Yellow", price: 1800 },
  { brand: "HP", printer: "Color LJ M552/M553/M557", cartridge: "CF361A Cyan", price: 1800 },
  { brand: "HP", printer: "Color LJ M552/M553/M557", cartridge: "CF360A Black", price: 1800 },
  { brand: "HP", printer: "Color LJ M154/MFP M180/M181", cartridge: "CF533A Magenta", price: 1500 },
  { brand: "HP", printer: "Color LJ M154/MFP M180/M181", cartridge: "CF532A Yellow", price: 1500 },
  { brand: "HP", printer: "Color LJ M154/MFP M180/M181", cartridge: "CF531A Cyan", price: 1500 },
  { brand: "HP", printer: "Color LJ M154/MFP M180/M181", cartridge: "CF530A Black", price: 1500 },
  { brand: "HP", printer: "5200", cartridge: "Q7516A", price: 1400 },
  { brand: "HP", printer: "5000/5100", cartridge: "C4129X", price: 1200 },
  { brand: "HP", printer: "4300", cartridge: "Q1339A", price: 1200 },
  { brand: "HP", printer: "4250/4350", cartridge: "Q5942X", price: 1200 },
  { brand: "HP", printer: "4250/4350", cartridge: "Q5942A", price: 900 },
  { brand: "HP", printer: "4200", cartridge: "Q1338A", price: 1300 },
  { brand: "HP", printer: "4100", cartridge: "C8061X", price: 1200 },
  { brand: "HP", printer: "4100", cartridge: "C8061A", price: 900 },
  { brand: "HP", printer: "4000/4050", cartridge: "C4127X", price: 1200 },
  { brand: "HP", printer: "4000/4050", cartridge: "C4127A", price: 900 },
  { brand: "HP", printer: "2400/2410/2420/2430", cartridge: "Q6511X", price: 1100 },
  { brand: "HP", printer: "2400/2410/2420/2430", cartridge: "Q6511A", price: 900 },
  { brand: "HP", printer: "2300", cartridge: "Q2610A", price: 900 },
  { brand: "HP", printer: "2100/2200", cartridge: "C4096A", price: 850 },
  { brand: "HP", printer: "1300", cartridge: "Q2613X", price: 900 },
  { brand: "HP", printer: "1300", cartridge: "Q2613A", price: 700 },
  { brand: "HP", printer: "1160/1320/M3390/M3392", cartridge: "Q5949X", price: 950 },
  { brand: "HP", printer: "1160/1320/M3390/M3392", cartridge: "Q5949A", price: 700 },
  { brand: "HP", printer: "1150", cartridge: "Q2624A", price: 700 },
  { brand: "HP", printer: "1100/1100A/3200", cartridge: "C4092A", price: 700 },
  { brand: "HP", printer: "1010/1012/1015/1018/1020/1022/3015/3020/3030/3050/3055/M1005", cartridge: "Q2612A", price: 700 },
  { brand: "HP", printer: "1010/1012/1015/1018/1020/1022/3015/3020/3030/3050/3055/M1005", cartridge: "Q2612X", price: 900 },
  { brand: "HP", printer: "1000/1005/1200/1220/3300/3320/3330/3380", cartridge: "C7115X", price: 900 },
  { brand: "HP", printer: "1000/1005/1200/1220/3300/3320/3330/3380", cartridge: "C7115A", price: 700 },
];

const SERVICES = [
  { icon: "Printer", title: "Заправка лазерных картриджей", desc: "Заправляем лазерные картриджи всех популярных брендов: HP, Canon, Samsung, Xerox, Brother. Используем качественный тонер." },
  { icon: "Wrench", title: "Ремонт струйных принтеров Epson", desc: "Профессиональный ремонт струйных принтеров марки Epson: замена головок, чистка дюз, устранение подачи бумаги." },
  { icon: "Truck", title: "Выезд по СПб и ЛО", desc: "Работаем по всему Санкт-Петербургу и Ленинградской области. Заберём и привезём картридж сами." },
  { icon: "Clock", title: "Срочная заправка", desc: "Экспресс-заправка в день обращения. Не нужно ждать — уходите сразу с готовым картриджем." },
  { icon: "Shield", title: "Гарантия качества", desc: "Даём гарантию 30 дней на все работы. Если что-то пойдёт не так — переделаем бесплатно." },
  { icon: "Package", title: "Корпоративным клиентам", desc: "Обслуживание организаций: договоры, акты, счета-фактуры. Скидки при регулярном обслуживании." },
];

const STEPS = [
  { num: "01", title: "Позвоните или напишите", desc: "Оставьте заявку любым удобным способом — по телефону, в мессенджере или через форму на сайте." },
  { num: "02", title: "Приносите картридж", desc: "Привезите картридж к нам или закажите курьера — приедем сами." },
  { num: "03", title: "Получаете результат", desc: "Забираете заправленный картридж. Обычно занимает от 30 минут до 2 часов." },
];

const TYPE_COLORS: Record<string, string> = {
  "Цветной": "bg-blue-50 text-blue-700",
  "Чёрный": "bg-gray-100 text-gray-700",
  "Лазерный": "bg-orange-50 text-orange-700",
  "Заправка": "bg-green-50 text-green-700",
};

export default function Index() {
  const [activeBrand, setActiveBrand] = useState("Все");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PRICE_DATA.filter((p) => {
    const matchBrand = activeBrand === "Все" || p.brand === activeBrand;
    const q = searchQuery.toLowerCase();
    const matchSearch = q === "" || p.brand.toLowerCase().includes(q) || p.printer.toLowerCase().includes(q) || p.cartridge.toLowerCase().includes(q);
    return matchBrand && matchSearch;
  });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-golos text-ink">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Icon name="Printer" size={16} className="text-white" />
            </div>
            <span className="font-oswald font-semibold text-lg tracking-wide text-ink">ЧернилоСервис</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-slate-600 hover:text-brand transition-colors font-medium"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:+79650224299"
            className="hidden md:flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors"
          >
            <Icon name="Phone" size={14} />
            +7 (965) 022-42-99
          </a>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-base text-slate-700 hover:text-brand py-1">
                {l.label}
              </button>
            ))}
            <a href="tel:+79650224299" className="mt-2 flex items-center gap-2 bg-brand text-white px-4 py-3 rounded-lg text-sm font-semibold justify-center">
              <Icon name="Phone" size={14} />
              +7 (965) 022-42-99
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-slate-50/80" />

        <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
              <Icon name="Zap" size={12} />
              Санкт-Петербург и Ленинградская область
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-tight text-ink mb-6">
              Заправка<br />
              <span className="text-brand">картриджей</span><br />
              в Санкт-Петербурге
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              Заправка лазерных картриджей и ремонт принтеров Epson. Работаем по СПб и Ленинградской области. Опыт более 15 лет.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://t.me/max"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-brand-dark transition-all hover:scale-105 flex items-center gap-2"
              >
                <Icon name="Send" size={16} />
                Оставить заявку
              </a>
              <button
                onClick={() => scrollTo("#prices")}
                className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold text-base hover:border-brand hover:text-brand transition-all flex items-center gap-2"
              >
                <Icon name="List" size={16} />
                Смотреть прайс
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[["250+", "клиентов"], ["15 лет", "опыта"], ["30 дней", "гарантия"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-oswald text-2xl font-bold text-brand">{val}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={HERO_IMAGE} alt="Заправка картриджей" className="w-full h-[420px] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Принимаем заказы сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">Что мы делаем</p>
            <h2 className="font-oswald text-4xl font-bold text-ink">Наши услуги</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:border-brand/30 hover:shadow-md transition-all group">
                <div className="w-11 h-11 bg-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                  <Icon name={s.icon} fallback="Circle" size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-ink mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE LIST */}
      <section id="prices" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">Стоимость работ</p>
            <h2 className="font-oswald text-4xl font-bold text-ink mb-4">Прайс-лист</h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Выберите бренд вашего принтера — и увидите актуальные цены на заправку
            </p>
          </div>

          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по принтеру или картриджу..."
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <Icon name="X" size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {BRANDS.map((b) => (
              <button
                key={b}
                onClick={() => setActiveBrand(b)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeBrand === b
                    ? "bg-brand text-white shadow-md shadow-brand/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="hidden md:grid grid-cols-12 bg-slate-50 border-b border-slate-200 px-4 py-3 gap-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide col-span-4">Принтер</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide col-span-6">Картридж</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide col-span-2 text-right">Цена, ₽</div>
            </div>
            {filtered.length === 0 ? (
              <div className="px-4 py-12 text-center text-slate-400">
                <Icon name="SearchX" size={32} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm">Ничего не найдено — попробуйте другой запрос</p>
              </div>
            ) : filtered.map((item, i) => (
              <div key={i} className="flex flex-col md:grid md:grid-cols-12 px-4 py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors gap-1 md:gap-2 md:items-center">
                <div className="text-xs text-slate-400 md:hidden">Принтер</div>
                <div className="text-sm text-slate-600 col-span-4">{item.printer}</div>
                <div className="text-xs text-slate-400 md:hidden mt-1">Картридж</div>
                <div className="text-sm font-medium text-ink col-span-6">{item.cartridge}</div>
                <div className="text-base font-bold text-brand md:text-right col-span-2 mt-1 md:mt-0">{item.price} ₽</div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-4 text-center">
            * Цены указаны за одну заправку. Возможны скидки при регулярном обслуживании.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">Процесс работы</p>
            <h2 className="font-oswald text-4xl font-bold text-ink">Как это работает</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="font-oswald text-6xl font-bold text-brand/15 mb-2">{step.num}</div>
                <h3 className="font-oswald text-xl font-semibold text-ink mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">О компании</p>
            <h2 className="font-oswald text-4xl font-bold text-ink mb-6">Более 15 лет на рынке СПб</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              У вас не будет простоев при печати документов. Осуществляем полный цикл работ — от заправки картриджей до сервисного обслуживания оргтехники в Санкт-Петербурге и Ленинградской области.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Работы выполняются сервис-инженерами с опытом более 10 лет. При незначительной поломке — отремонтируем на месте. Если после ремонта или заправки по нашей вине появятся проблемы — исправим по гарантии за наш счёт.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Полный цикл обслуживания оргтехники",
                "Ремонт на месте при выезде",
                "Гарантия — за наш счёт",
                "Ремонт Epson любой сложности",
              ].map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={16} className="text-brand mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "250+", label: "Довольных клиентов" },
              { val: "15 лет", label: "На рынке СПб" },
              { val: "1000+", label: "Картриджей в год" },
              { val: "СПб и ЛО", label: "Зона обслуживания" },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
                <div className="font-oswald text-3xl font-bold text-brand mb-1">{stat.val}</div>
                <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">Связаться с нами</p>
            <h2 className="font-oswald text-4xl font-bold">Контакты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (965) 022-42-99", href: "tel:+79650224299" },
              { icon: "Send", label: "Telegram", value: "@max — оставить заявку", href: "https://t.me/max" },
              { icon: "MapPin", label: "Адрес", value: "Мурино, ул. Оборонная, д. 2, корп. 3", href: "https://yandex.ru/maps/?text=Мурино+ул+Оборонная+2+корп+3" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-white/10 hover:border-brand/50 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                  <Icon name={c.icon} fallback="Circle" size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">{c.label}</div>
                <div className="font-semibold text-white">{c.value}</div>
              </a>
            ))}
          </div>

          <div className="max-w-md mx-auto bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Clock" size={16} className="text-brand" />
              <span className="font-oswald font-semibold text-base">Режим работы</span>
            </div>
            <div className="space-y-2">
              {[
                ["Понедельник — Пятница", "9:00 — 20:00"],
                ["Суббота", "10:00 — 18:00"],
                ["Воскресенье", "Выходной"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-slate-400">{day}</span>
                  <span className={`font-medium ${time === "Выходной" ? "text-slate-500" : "text-white"}`}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand rounded flex items-center justify-center">
              <Icon name="Printer" size={12} className="text-white" />
            </div>
            <span className="font-oswald font-semibold text-white">ЧернилоСервис</span>
          </div>
          <p>© 2024 ЧернилоСервис. Все права защищены.</p>
          <div className="flex gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="hover:text-brand transition-colors">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}