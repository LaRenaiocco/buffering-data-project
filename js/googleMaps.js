
let map;

function initMap() {
  const sunnydaleHigh = {
    lat: 33.830818,
    lng: -118.3234838
  }


  scoobieMap = new google.maps.Map(document.getElementById("map-view"), {
    center: sunnydaleHigh,
    zoom: 2,
    styles: [
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 13
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#144b53"
              },
              {
                  "lightness": 14
              },
              {
                  "weight": 1.4
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#08304b"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#0c4152"
              },
              {
                  "lightness": 5
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#0b434f"
              },
              {
                  "lightness": 25
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#0b3d51"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#146474"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#021019"
              }
          ]
      }
  ]
  });

  const markers = [
    {
      "city": "Melbourne",
      "state": "Victoria",
      "zipcode": "3044",
      "country": "Australia",
      "geo_input": "Melbourne,Victoria,3044,Australia",
      "lat": -37.7310813,
      "lng": 144.9364069
    },
    {
      "city": "Canberra",
      "state": "ACT",
      "zipcode": "2617",
      "country": "Australia",
      "geo_input": "Canberra,ACT,2617,Australia",
      "lat": -35.228161,
      "lng": 149.092696
    },
    {
      "city": "St Peters",
      "state": "New South Wales",
      "zipcode": "2044",
      "country": "Australia",
      "geo_input": "St Peters,New South Wales,2044,Australia",
      "lat": -33.9155155,
      "lng": 151.1746184
    },
    {
      "city": "Sydney",
      "state": "New South Wales",
      "zipcode": "2026",
      "country": "Australia",
      "geo_input": "Sydney,New South Wales,2026,Australia",
      "lat": -33.8922511,
      "lng": 151.2714535
    },
    {
      "city": "sydney",
      "state": "New South Wales",
      "zipcode": "2042",
      "country": "Australia",
      "geo_input": "sydney,New South Wales,2042,Australia",
      "lat": -33.8992314,
      "lng": 151.1781916
    },
    {
      "city": "Sydney",
      "state": "New South Wales",
      "zipcode": "2049",
      "country": "Australia",
      "geo_input": "Sydney,New South Wales,2049,Australia",
      "lat": -33.8932918,
      "lng": 151.1548847
    },
    {
      "city": "Wollongong",
      "state": "New South Wales",
      "zipcode": "2500",
      "country": "Australia",
      "geo_input": "Wollongong,New South Wales,2500,Australia",
      "lat": -34.4278121,
      "lng": 150.8930607
    },
    {
      "city": "Gladstone",
      "state": "Queensland",
      "zipcode": "4680",
      "country": "Australia",
      "geo_input": "Gladstone,Queensland,4680,Australia",
      "lat": -23.8415948,
      "lng": 151.2497708
    },
    {
      "city": "Melbourne",
      "state": "Victoria",
      "zipcode": "3039",
      "country": "Australia",
      "geo_input": "Melbourne,Victoria,3039,Australia",
      "lat": -37.7675363,
      "lng": 144.9198932
    },
    {
      "city": "Melbourne",
      "state": "Victoria",
      "zipcode": "3082",
      "country": "Australia",
      "geo_input": "Melbourne,Victoria,3082,Australia",
      "lat": -37.6649616,
      "lng": 145.0658766
    },
    {
      "city": "Melbourne",
      "state": "Victoria",
      "zipcode": "3122",
      "country": "Australia",
      "geo_input": "Melbourne,Victoria,3122,Australia",
      "lat": -37.8222114,
      "lng": 145.0328017
    },
    {
      "city": "Beerse",
      "state": "Flanders",
      "zipcode": "2340",
      "country": "Belgium",
      "geo_input": "Beerse,Flanders,2340,Belgium",
      "lat": 51.3211024,
      "lng": 4.8288945
    },
    {
      "city": "Warwick",
      "state": "",
      "zipcode": "",
      "country": "Bermuda",
      "geo_input": "Warwick,,Bermuda",
      "lat": 32.2661534,
      "lng": -64.8081198
    },
    {
      "city": "Fortaleza",
      "state": "Ceará",
      "zipcode": "60150-161",
      "country": "Brazil",
      "geo_input": "Fortaleza,Ceará,60150-161,Brazil",
      "lat": -3.732781,
      "lng": -38.5087677
    },
    {
      "city": "Porto Alegre",
      "state": "Rio Grande do Sul",
      "zipcode": "90110170",
      "country": "Brazil",
      "geo_input": "Porto Alegre,Rio Grande do Sul,90110170,Brazil",
      "lat": -30.0473172,
      "lng": -51.2231545
    },
    {
      "city": "Edmonton",
      "state": "AB",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Edmonton,AB,,Canada",
      "lat": 53.5461245,
      "lng": -113.4938229
    },
    {
      "city": "Stony Plain",
      "state": "AB",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Stony Plain,AB,,Canada",
      "lat": 53.52942880000001,
      "lng": -114.0018793
    },
    {
      "city": "Vancouver",
      "state": "BC",
      "zipcode": "V5K 1R2",
      "country": "Canada",
      "geo_input": "Vancouver,BC,V5K 1R2,Canada",
      "lat": 49.2845343,
      "lng": -123.0478071
    },
    {
      "city": "Vancouver",
      "state": "BC",
      "zipcode": "V6E 1Y7",
      "country": "Canada",
      "geo_input": "Vancouver,BC,V6E 1Y7,Canada",
      "lat": 49.2843112,
      "lng": -123.1298559
    },
    {
      "city": "Vancouver",
      "state": "BC",
      "zipcode": "v6e1j7",
      "country": "Canada",
      "geo_input": "Vancouver,BC,v6e1j7,Canada",
      "lat": 49.2844546,
      "lng": -123.1316149
    },
    {
      "city": "Vancouver",
      "state": "BC",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Vancouver,BC,,Canada",
      "lat": 49.2827291,
      "lng": -123.1207375
    },
    {
      "city": "Vancouver",
      "state": "BC",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Vancouver,BC,,Canada",
      "lat": 49.2827291,
      "lng": -123.1207375
    },
    {
      "city": "Vancouver",
      "state": "BC",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Vancouver,BC,,Canada",
      "lat": 49.2827291,
      "lng": -123.1207375
    },
    {
      "city": "Victoria",
      "state": "BC",
      "zipcode": "V8S 1J8",
      "country": "Canada",
      "geo_input": "Victoria,BC,V8S 1J8,Canada",
      "lat": 48.4110127,
      "lng": -123.3350953
    },
    {
      "city": "Victoria",
      "state": "BC",
      "zipcode": "V8T 2B1",
      "country": "Canada",
      "geo_input": "Victoria,BC,V8T 2B1,Canada",
      "lat": 48.4399409,
      "lng": -123.3527625
    },
    {
      "city": "Victoria",
      "state": "BC",
      "zipcode": "V8Z 2M5",
      "country": "Canada",
      "geo_input": "Victoria,BC,V8Z 2M5,Canada",
      "lat": 48.4647561,
      "lng": -123.4053217
    },
    {
      "city": "Winnipeg",
      "state": "MB",
      "zipcode": "R3G2J5",
      "country": "Canada",
      "geo_input": "Winnipeg,MB,R3G2J5,Canada",
      "lat": 49.8873858,
      "lng": -97.1744056
    },
    {
      "city": "Winnipeg",
      "state": "MB",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Winnipeg,MB,,Canada",
      "lat": 49.895136,
      "lng": -97.13837439999999
    },
    {
      "city": "St. John's",
      "state": "NL",
      "zipcode": "A1B 1W3",
      "country": "Canada",
      "geo_input": "St. John's,NL,A1B 1W3,Canada",
      "lat": 47.5592863,
      "lng": -52.7522932
    },
    {
      "city": "Halifax",
      "state": "NS",
      "zipcode": "B3K 0H2",
      "country": "Canada",
      "geo_input": "Halifax,NS,B3K 0H2,Canada",
      "lat": 44.6538938,
      "lng": -63.5863728
    },
    {
      "city": "Halifax",
      "state": "NS",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Halifax,NS,,Canada",
      "lat": 44.64876350000001,
      "lng": -63.5752387
    },
    {
      "city": "Sydney",
      "state": "NS",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Sydney,NS,,Canada",
      "lat": 46.1367899,
      "lng": -60.19422399999999
    },
    {
      "city": "Hamilton",
      "state": "ON",
      "zipcode": "L8N2L7",
      "country": "Canada",
      "geo_input": "Hamilton,ON,L8N2L7,Canada",
      "lat": 43.2503823,
      "lng": -79.8654711
    },
    {
      "city": "Midland",
      "state": "ON",
      "zipcode": "L4R 3W7",
      "country": "Canada",
      "geo_input": "Midland,ON,L4R 3W7,Canada",
      "lat": 44.7457771,
      "lng": -79.8903588
    },
    {
      "city": "Rainy River",
      "state": "ON",
      "zipcode": "P0W 1L0",
      "country": "Canada",
      "geo_input": "Rainy River,ON,P0W 1L0,Canada",
      "lat": 48.7216623,
      "lng": -94.5695247
    },
    {
      "city": "Toronto",
      "state": "ON",
      "zipcode": "M4C4L9",
      "country": "Canada",
      "geo_input": "Toronto,ON,M4C4L9,Canada",
      "lat": 43.68862,
      "lng": -79.30835220000002
    },
    {
      "city": "Toronto",
      "state": "ON",
      "zipcode": "M4K 2G7",
      "country": "Canada",
      "geo_input": "Toronto,ON,M4K 2G7,Canada",
      "lat": 43.6893695,
      "lng": -79.3501639
    },
    {
      "city": "Toronto",
      "state": "ON",
      "zipcode": "M5V0M9",
      "country": "Canada",
      "geo_input": "Toronto,ON,M5V0M9,Canada",
      "lat": 43.653226,
      "lng": -79.3831843
    },
    {
      "city": "Toronto",
      "state": "ON",
      "zipcode": "M6P 1M3",
      "country": "Canada",
      "geo_input": "Toronto,ON,M6P 1M3,Canada",
      "lat": 43.66038229999999,
      "lng": -79.4723221
    },
    {
      "city": "Toronto",
      "state": "ON",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Toronto,ON,,Canada",
      "lat": 43.653226,
      "lng": -79.3831843
    },
    {
      "city": "Toronto",
      "state": "ON",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Toronto,ON,,Canada",
      "lat": 43.653226,
      "lng": -79.3831843
    },
    {
      "city": "Toronto",
      "state": "ON",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Toronto,ON,,Canada",
      "lat": 43.653226,
      "lng": -79.3831843
    },
    {
      "city": "Joliette",
      "state": "QC",
      "zipcode": "J6E 8P3",
      "country": "Canada",
      "geo_input": "Joliette,QC,J6E 8P3,Canada",
      "lat": 46.0131009,
      "lng": -73.4157846
    },
    {
      "city": "Montreal",
      "state": "QC",
      "zipcode": "H1V 1L5",
      "country": "Canada",
      "geo_input": "Montreal,QC,H1V 1L5,Canada",
      "lat": 45.5573686,
      "lng": -73.536352
    },
    {
      "city": "Montreal",
      "state": "QC",
      "zipcode": "H3X 2G2",
      "country": "Canada",
      "geo_input": "Montreal,QC,H3X 2G2,Canada",
      "lat": 45.477011,
      "lng": -73.6382411
    },
    {
      "city": "Montreal",
      "state": "QC",
      "zipcode": "h4b 2w7",
      "country": "Canada",
      "geo_input": "Montreal,QC,h4b 2w7,Canada",
      "lat": 45.4647158,
      "lng": -73.61830239999999
    },
    {
      "city": "Montreal",
      "state": "QC",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Montreal,QC,,Canada",
      "lat": 45.5016889,
      "lng": -73.567256
    },
    {
      "city": "Montreal",
      "state": "QC",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Montreal,QC,,Canada",
      "lat": 45.5016889,
      "lng": -73.567256
    },
    {
      "city": "Montreal",
      "state": "QC",
      "zipcode": "",
      "country": "Canada",
      "geo_input": "Montreal,QC,,Canada",
      "lat": 45.5016889,
      "lng": -73.567256
    },
    {
      "city": "Montréal",
      "state": "QC",
      "zipcode": "H9A 1L4",
      "country": "Canada",
      "geo_input": "Montréal,QC,H9A 1L4,Canada",
      "lat": 45.49507999999999,
      "lng": -73.83672829999999
    },
    {
      "city": "Shanghai",
      "state": "",
      "zipcode": "",
      "country": "China",
      "geo_input": "Shanghai,,,China",
      "lat": 31.230416,
      "lng": 121.473701
    },
    {
      "city": "Copenhagen",
      "state": "",
      "zipcode": "2990",
      "country": "Denmark",
      "geo_input": "Copenhagen,,2990,Denmark",
      "lat": 55.6760968,
      "lng": 12.5683372
    },
    {
      "city": "Copenhagen",
      "state": "",
      "zipcode": "",
      "country": "Denmark",
      "geo_input": "Copenhagen,,,Denmark",
      "lat": 55.6760968,
      "lng": 12.5683372
    },
    {
      "city": "Quito",
      "state": "PICHINCHA",
      "zipcode": "170157",
      "country": "Ecuador",
      "geo_input": "Quito,PICHINCHA,170157,Ecuador",
      "lat": -0.1923546,
      "lng": -78.44108949999999
    },
    {
      "city": "Helsinki",
      "state": "Uusimaa",
      "zipcode": "530",
      "country": "Finland",
      "geo_input": "Helsinki,Uusimaa,530,Finland",
      "lat": 60.1809045,
      "lng": 24.9526712
    },
    {
      "city": "Helsinki",
      "state": "Uusimaa",
      "zipcode": "720",
      "country": "Finland",
      "geo_input": "Helsinki,Uusimaa,720,Finland",
      "lat": 60.16985569999999,
      "lng": 24.9383791
    },
    {
      "city": "Helsinki",
      "state": "",
      "zipcode": "610",
      "country": "Finland",
      "geo_input": "Helsinki,,610,Finland",
      "lat": 60.16985569999999,
      "lng": 24.9383791
    },
    {
      "city": "Clermont-Ferrand",
      "state": "Puy-de-Dôme",
      "zipcode": "63000",
      "country": "France",
      "geo_input": "Clermont-Ferrand,Puy-de-Dôme,63000,France",
      "lat": 45.771264,
      "lng": 3.1198023
    },
    {
      "city": "Nice",
      "state": "",
      "zipcode": "",
      "country": "France",
      "geo_input": "Nice,,,France",
      "lat": 43.7101728,
      "lng": 7.261953200000001
    },
    {
      "city": "Munich",
      "state": "Bavaria",
      "zipcode": "80336",
      "country": "Germany",
      "geo_input": "Munich,Bavaria,80336,Germany",
      "lat": 48.1340355,
      "lng": 11.5571732
    },
    {
      "city": "Wuerzburg",
      "state": "Bavaria",
      "zipcode": "97082",
      "country": "Germany",
      "geo_input": "Wuerzburg,Bavaria,97082,Germany",
      "lat": 49.7646014,
      "lng": 9.905533799999999
    },
    {
      "city": "Berlin",
      "state": "",
      "zipcode": "10437",
      "country": "Germany",
      "geo_input": "Berlin,,10437,Germany",
      "lat": 52.5455109,
      "lng": 13.4072944
    },
    {
      "city": "Berlin",
      "state": "",
      "zipcode": "12103",
      "country": "Germany",
      "geo_input": "Berlin,,12103,Germany",
      "lat": 52.4639426,
      "lng": 13.3728893
    },
    {
      "city": "Rostock",
      "state": "",
      "zipcode": "",
      "country": "Germany",
      "geo_input": "Rostock,,,Germany",
      "lat": 54.0924406,
      "lng": 12.0991466
    },
    {
      "city": "Melle",
      "state": "Lower Saxony",
      "zipcode": "49324",
      "country": "Germany",
      "geo_input": "Melle,Lower Saxony,49324,Germany",
      "lat": 52.2052401,
      "lng": 8.3403115
    },
    {
      "city": "Detmold",
      "state": "NRW",
      "zipcode": "",
      "country": "Germany",
      "geo_input": "Detmold,NRW,,Germany",
      "lat": 51.9384783,
      "lng": 8.8686381
    },
    {
      "city": "Dortmund",
      "state": "NRW",
      "zipcode": "DE-44287",
      "country": "Germany",
      "geo_input": "Dortmund,NRW,DE-44287,Germany",
      "lat": 51.4873134,
      "lng": 7.561229
    },
    {
      "city": "Cologne",
      "state": "",
      "zipcode": "",
      "country": "Germany",
      "geo_input": "Cologne,,,Germany",
      "lat": 50.937531,
      "lng": 6.9602786
    },
    {
      "city": "San Pedro Sula",
      "state": "Cortes",
      "zipcode": "",
      "country": "Honduras",
      "geo_input": "San Pedro Sula,Cortes,,Honduras",
      "lat": 15.5038827,
      "lng": -88.01386190000001
    },
    {
      "city": "Jerusalem",
      "state": "",
      "zipcode": "9103401",
      "country": "Israel",
      "geo_input": "Jerusalem,,9103401,Israel",
      "lat": 31.7744237,
      "lng": 35.1772481
    },
    {
      "city": "Jerusalem",
      "state": "",
      "zipcode": "9511115",
      "country": "Israel",
      "geo_input": "Jerusalem,,9511115,Israel",
      "lat": 31.768319,
      "lng": 35.21371
    },
    {
      "city": "ravid",
      "state": "",
      "zipcode": "",
      "country": "israel",
      "geo_input": "Ravid,,,Israel",
      "lat": 32.850619,
      "lng": 35.464074
    },
    {
      "city": "Mexico City",
      "state": "CDMX",
      "zipcode": "3650",
      "country": "Mexico",
      "geo_input": "Mexico City,CDMX,3650,Mexico",
      "lat": 19.4360762,
      "lng": -99.07190829999999
    },
    {
      "city": "Puebla",
      "state": "",
      "zipcode": "72730",
      "country": "Mexico",
      "geo_input": "Puebla,,72730,Mexico",
      "lat": 19.1069089,
      "lng": -98.2513802
    },
    {
      "city": "Dronten",
      "state": "Flevoland",
      "zipcode": "8251TB",
      "country": "Netherlands",
      "geo_input": "Dronten,Flevoland,8251TB,Netherlands",
      "lat": 52.51324779999999,
      "lng": 5.7201982
    },
    {
      "city": "Amsterdam",
      "state": "",
      "zipcode": "1032VA",
      "country": "Netherlands",
      "geo_input": "Amsterdam,,1032VA,Netherlands",
      "lat": 52.4005787,
      "lng": 4.9134265
    },
    {
      "city": "Deventer",
      "state": "",
      "zipcode": "7411 JL",
      "country": "Netherlands",
      "geo_input": "Deventer,,7411 JL,Netherlands",
      "lat": 52.2526352,
      "lng": 6.1569767
    },
    {
      "city": "Auckland",
      "state": "",
      "zipcode": "",
      "country": "New Zealand",
      "geo_input": "Auckland,,,New Zealand",
      "lat": -36.85088270000001,
      "lng": 174.7644881
    },
    {
      "city": "Paraparaumu",
      "state": "Kapiti",
      "zipcode": "5032",
      "country": "New Zealand",
      "geo_input": "Paraparaumu,Kapiti,5032,New Zealand",
      "lat": -40.915496,
      "lng": 175.007312
    },
    {
      "city": "Sirdal",
      "state": "Agder",
      "zipcode": "",
      "country": "Norway",
      "geo_input": "Sirdal,Agder,,Norway",
      "lat": 58.8776993,
      "lng": 6.8358797
    },
    {
      "city": "Oslo",
      "state": "",
      "zipcode": "1056",
      "country": "Norway",
      "geo_input": "Oslo,,1056,Norway",
      "lat": 59.9138688,
      "lng": 10.7522454
    },
    {
      "city": "Barcelona",
      "state": "Catalonia",
      "zipcode": "8950",
      "country": "Spain",
      "geo_input": "Barcelona,Catalonia,8950,Spain",
      "lat": 41.3772561,
      "lng": 2.0910377
    },
    {
      "city": "Galapagar",
      "state": "Madrid",
      "zipcode": "28260",
      "country": "Spain",
      "geo_input": "Galapagar,Madrid,28260,Spain",
      "lat": 40.5768377,
      "lng": -4.005802699999999
    },
    {
      "city": "Luleå",
      "state": "Gammelstad",
      "zipcode": "95435",
      "country": "Sweden",
      "geo_input": "Luleå,Gammelstad,95435,Sweden",
      "lat": 65.6421004,
      "lng": 22.0131975
    },
    {
      "city": "Luleå",
      "state": "Norrbotten",
      "zipcode": "97633",
      "country": "Sweden",
      "geo_input": "Luleå,Norrbotten,97633,Sweden",
      "lat": 65.6136813,
      "lng": 22.1762379
    },
    {
      "city": "Norrköping",
      "state": "Östergötland",
      "zipcode": "60336",
      "country": "Sweden",
      "geo_input": "Norrköping,Östergötland,60336,Sweden",
      "lat": 58.587733,
      "lng": 16.1410286
    },
    {
      "city": "Stockholm",
      "state": "",
      "zipcode": "12371",
      "country": "Sweden",
      "geo_input": "Stockholm,,12371,Sweden",
      "lat": 59.2348351,
      "lng": 18.100292
    },
    {
      "city": "Stockholm",
      "state": "",
      "zipcode": "12931",
      "country": "Sweden",
      "geo_input": "Stockholm,,12931,Sweden",
      "lat": 59.29174210000001,
      "lng": 17.9832141
    },
    {
      "city": "Stockholm",
      "state": "",
      "zipcode": "13146",
      "country": "Sweden",
      "geo_input": "Stockholm,,13146,Sweden",
      "lat": 59.32235420000001,
      "lng": 18.2106976
    },
    {
      "city": "Vällingby",
      "state": "Stockholm",
      "zipcode": "16247",
      "country": "Sweden",
      "geo_input": "Vällingby,Stockholm,16247,Sweden",
      "lat": 59.38550739999999,
      "lng": 17.8569789
    },
    {
      "city": "Uppsala",
      "state": "Uppland",
      "zipcode": "75228",
      "country": "Sweden",
      "geo_input": "Uppsala,Uppland,75228,Sweden",
      "lat": 59.8728559,
      "lng": 17.6035617
    },
    {
      "city": "Uppsala",
      "state": "Uppland",
      "zipcode": "75228",
      "country": "Sweden",
      "geo_input": "Uppsala,Uppland,75228,Sweden",
      "lat": 59.8728559,
      "lng": 17.6035617
    },
    {
      "city": "Uppsala",
      "state": "Uppland",
      "zipcode": "75326",
      "country": "Sweden",
      "geo_input": "Uppsala,Uppland,75326,Sweden",
      "lat": 59.8591869,
      "lng": 17.6510456
    },
    {
      "city": "Umeå",
      "state": "Västerbotten",
      "zipcode": "90625",
      "country": "Sweden",
      "geo_input": "Umeå,Västerbotten,90625,Sweden",
      "lat": 63.8567812,
      "lng": 20.3156996
    },
    {
      "city": "Göteborg",
      "state": "Västra Götaland",
      "zipcode": "41555",
      "country": "Sweden",
      "geo_input": "Göteborg,Västra Götaland,41555,Sweden",
      "lat": 57.76072449999999,
      "lng": 12.0566967
    },
    {
      "city": "Göteborg",
      "state": "Västra Götaland",
      "zipcode": "41555",
      "country": "Sweden",
      "geo_input": "Göteborg,Västra Götaland,41555,Sweden",
      "lat": 57.76072449999999,
      "lng": 12.0566967
    },
    {
      "city": "Göteborg",
      "state": "Västra Götaland",
      "zipcode": "41720",
      "country": "Sweden",
      "geo_input": "Göteborg,Västra Götaland,41720,Sweden",
      "lat": 57.72517359999999,
      "lng": 11.940065
    },
    {
      "city": "Eskilstuna",
      "state": "",
      "zipcode": "63219",
      "country": "Sweden",
      "geo_input": "Eskilstuna,,63219,Sweden",
      "lat": 59.37124859999999,
      "lng": 16.5098046
    },
    {
      "city": "Gothenburg",
      "state": "",
      "zipcode": "",
      "country": "Sweden",
      "geo_input": "Gothenburg,,,Sweden",
      "lat": 57.70887,
      "lng": 11.97456
    },
    {
      "city": "Lund",
      "state": "",
      "zipcode": "",
      "country": "Sweden",
      "geo_input": "Lund,,,Sweden",
      "lat": 55.7046601,
      "lng": 13.1910073
    },
    {
      "city": "Norrkoeping",
      "state": "",
      "zipcode": "",
      "country": "Sweden",
      "geo_input": "Norrkoeping,,,Sweden",
      "lat": 58.587745,
      "lng": 16.192421
    },
    {
      "city": "Stockholm",
      "state": "",
      "zipcode": "",
      "country": "Sweden",
      "geo_input": "Stockholm,,,Sweden",
      "lat": 59.32932349999999,
      "lng": 18.0685808
    },
    {
      "city": "Stockholm",
      "state": "",
      "zipcode": "",
      "country": "Sweden",
      "geo_input": "Stockholm,,,Sweden",
      "lat": 59.32932349999999,
      "lng": 18.0685808
    },
    {
      "city": "Aberdeen",
      "state": "Aberdeenshire",
      "zipcode": "AB11 6EW",
      "country": "United Kingdom",
      "geo_input": "Aberdeen,Aberdeenshire,AB11 6EW,United Kingdom",
      "lat": 57.1422973,
      "lng": -2.1041189
    },
    {
      "city": "Wokingham",
      "state": "Berkshire",
      "zipcode": "RG41 3HN",
      "country": "United Kingdom",
      "geo_input": "Wokingham,Berkshire,RG41 3HN,United Kingdom",
      "lat": 51.40732080000001,
      "lng": -0.8582149
    },
    {
      "city": "Chesham",
      "state": "Buckinghamshire",
      "zipcode": "HP5 2XN",
      "country": "United Kingdom",
      "geo_input": "Chesham,Buckinghamshire,HP5 2XN,United Kingdom",
      "lat": 51.7280696,
      "lng": -0.6245398
    },
    {
      "city": "Cambridge",
      "state": "Cambridgeshire",
      "zipcode": "CB4 1SQ",
      "country": "United Kingdom",
      "geo_input": "Cambridge,Cambridgeshire,CB4 1SQ,United Kingdom",
      "lat": 52.2205119,
      "lng": 0.1477917
    },
    {
      "city": "Huntingdon",
      "state": "Cambridgeshire",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Huntingdon,Cambridgeshire,,United Kingdom",
      "lat": 52.33146,
      "lng": -0.182552
    },
    {
      "city": "Exeter",
      "state": "Devon",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Exeter,Devon,,United Kingdom",
      "lat": 50.718412,
      "lng": -3.533899
    },
    {
      "city": "Brighton",
      "state": "East Sussex",
      "zipcode": "BN13TD",
      "country": "United Kingdom",
      "geo_input": "Brightton,East Sussex,BN13TD,United Kingdom",
      "lat": 50.8309918,
      "lng": -0.1466227
    },
    {
      "city": "Brighton",
      "state": "East Sussex",
      "zipcode": "BN2",
      "country": "United Kingdom",
      "geo_input": "Brighton,East Sussex,BN2,United Kingdom",
      "lat": 50.835201,
      "lng": -0.0802082
    },
    {
      "city": "Brighton",
      "state": "East Sussex",
      "zipcode": "BN2 3ET",
      "country": "United Kingdom",
      "geo_input": "Brighton,East Sussex,BN2 3ET,United Kingdom",
      "lat": 50.8317473,
      "lng": -0.1259081
    },
    {
      "city": "Brighton",
      "state": "England",
      "zipcode": "BN1 5PZ",
      "country": "United Kingdom",
      "geo_input": "Brighton,England,BN1 5PZ,United Kingdom",
      "lat": 50.8391929,
      "lng": -0.1524986
    },
    {
      "city": "Bristol",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Bristol,England,,United Kingdom",
      "lat": 51.454513,
      "lng": -2.58791
    },
    {
      "city": "Chester",
      "state": "England",
      "zipcode": "CH4 7DT",
      "country": "United Kingdom",
      "geo_input": "Chester,England,CH4 7DT,United Kingdom",
      "lat": 53.18209539999999,
      "lng": -2.8817568
    },
    {
      "city": "Durham",
      "state": "England",
      "zipcode": "DH1 4ET",
      "country": "United Kingdom",
      "geo_input": "Durham,England,DH1 4ET,United Kingdom",
      "lat": 54.7763167,
      "lng": -1.5823774
    },
    {
      "city": "Durham",
      "state": "England",
      "zipcode": "DH64EA",
      "country": "United Kingdom",
      "geo_input": "Durham,England,DH64EA,United Kingdom",
      "lat": 54.7128144,
      "lng": -1.5065521
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "E10 6NJ",
      "country": "United Kingdom",
      "geo_input": "London,England,E10 6NJ,United Kingdom",
      "lat": 51.5651269,
      "lng": -0.0071614
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "E10 6NT",
      "country": "United Kingdom",
      "geo_input": "London,England,E10 6NT,United Kingdom",
      "lat": 51.563812,
      "lng": -0.005324799999999999
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "N16 7DP",
      "country": "United Kingdom",
      "geo_input": "London,England,N16 7DP,United Kingdom",
      "lat": 51.563464,
      "lng": -0.06742859999999999
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "SM3 9JH",
      "country": "United Kingdom",
      "geo_input": "London,England,SM3 9JH,United Kingdom",
      "lat": 51.3844388,
      "lng": -0.2114427
    },
    {
      "city": "LONDON",
      "state": "England",
      "zipcode": "sw 12 9dx",
      "country": "United Kingdom",
      "geo_input": "LONDON,England,sw 12 9dx,United Kingdom",
      "lat": 51.4520322,
      "lng": -0.1474357
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "SW18 - Wimbledon!",
      "country": "United Kingdom",
      "geo_input": "London,England,SW18 - Wimbledon!,United Kingdom",
      "lat": 51.4465501,
      "lng": -0.193461
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "W12 8JF",
      "country": "United Kingdom",
      "geo_input": "London,England,W12 8JF,United Kingdom",
      "lat": 51.5034443,
      "lng": -0.2326837
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "London,England,,United Kingdom",
      "lat": 51.5073509,
      "lng": -0.1277583
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "London,England,,United Kingdom",
      "lat": 51.5073509,
      "lng": -0.1277583
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "London,England,,United Kingdom",
      "lat": 51.5073509,
      "lng": -0.1277583
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "N5 2JA",
      "country": "United Kingdom",
      "geo_input": "London,England,N5 2JA,United Kingdom",
      "lat": 51.5506288,
      "lng": -0.08908769999999999
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "SW16 2ET",
      "country": "United Kingdom",
      "geo_input": "London,England,SW16 2ET,United Kingdom",
      "lat": 51.424411,
      "lng": -0.125763
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "London,England,,United Kingdom",
      "lat": 51.5073509,
      "lng": -0.1277583
    },
    {
      "city": "London",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "London,England,,United Kingdom",
      "lat": 51.5073509,
      "lng": -0.1277583
    },
    {
      "city": "Manchester",
      "state": "England",
      "zipcode": "M14",
      "country": "United Kingdom",
      "geo_input": "Manchester,England,M14,United Kingdom",
      "lat": 53.4508777,
      "lng": -2.2294364
    },
    {
      "city": "Manchester",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Manchester,England,,United Kingdom",
      "lat": 53.4807593,
      "lng": -2.2426305
    },
    {
      "city": "Manchester",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Manchester,England,,United Kingdom",
      "lat": 53.4807593,
      "lng": -2.2426305
    },
    {
      "city": "Manchester",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Manchester,England,,United Kingdom",
      "lat": 53.4807593,
      "lng": -2.2426305
    },
    {
      "city": "Nottingham",
      "state": "England",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Nottingham,England,,United Kingdom",
      "lat": 52.95478319999999,
      "lng": -1.1581086
    },
    {
      "city": "Oxford",
      "state": "England",
      "zipcode": "OX43RQ",
      "country": "United Kingdom",
      "geo_input": "Oxford,England,OX43RQ,United Kingdom",
      "lat": 51.731702,
      "lng": -1.2142775
    },
    {
      "city": "South London",
      "state": "England",
      "zipcode": "SE19 1SR",
      "country": "United Kingdom",
      "geo_input": "South London,England,SE19 1SR,United Kingdom",
      "lat": 51.425845,
      "lng": -0.0806374
    },
    {
      "city": "Basildon",
      "state": "Essex",
      "zipcode": "SS15 5HJ",
      "country": "United Kingdom",
      "geo_input": "Basildon,Essex,SS15 5HJ,United Kingdom",
      "lat": 51.5695244,
      "lng": 0.4287687
    },
    {
      "city": "Southend",
      "state": "Essex",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Southend,Essex,,United Kingdom",
      "lat": 51.5459269,
      "lng": 0.7077123
    },
    {
      "city": "Cheltenham",
      "state": "Gloucestershire",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Cheltenham,Gloucestershire,,United Kingdom",
      "lat": 51.8993855,
      "lng": -2.0782533
    },
    {
      "city": "Canterbury",
      "state": "Kent",
      "zipcode": "CT2 7HN",
      "country": "United Kingdom",
      "geo_input": "Canterbury,Kent,CT2 7HN,United Kingdom",
      "lat": 51.2845567,
      "lng": 1.0718811
    },
    {
      "city": "Maidstone",
      "state": "Kent",
      "zipcode": "ME14",
      "country": "United Kingdom",
      "geo_input": "Maidstone,Kent,ME14,United Kingdom",
      "lat": 51.2932053,
      "lng": 0.5736471
    },
    {
      "city": "Ramsgate",
      "state": "Kent",
      "zipcode": "CT11 8JT",
      "country": "United Kingdom",
      "geo_input": "Ramsgate,Kent,CT11 8JT,United Kingdom",
      "lat": 51.3359979,
      "lng": 1.4247772
    },
    {
      "city": "Manchester",
      "state": "Lancashire",
      "zipcode": "M19 2TP",
      "country": "United Kingdom",
      "geo_input": "Manchester,Lancashire,M19 2TP,United Kingdom",
      "lat": 53.4411944,
      "lng": -2.1888359
    },
    {
      "city": "Norwich",
      "state": "Norfolk",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Norwich,Norfolk,,United Kingdom",
      "lat": 52.6308859,
      "lng": 1.297355
    },
    {
      "city": "Holywood",
      "state": "Northern Ireland",
      "zipcode": "Bt18 9nd",
      "country": "United Kingdom",
      "geo_input": "Holywood,Northern Ireland,Bt18 9nd,United Kingdom",
      "lat": 54.6351615,
      "lng": -5.828236
    },
    {
      "city": "Oxford",
      "state": "Oxfordshire",
      "zipcode": "OX2 6BH",
      "country": "United Kingdom",
      "geo_input": "Oxford,Oxfordshire,OX2 6BH,United Kingdom",
      "lat": 51.7583989,
      "lng": -1.2699561
    },
    {
      "city": "Oxford",
      "state": "Oxfordshire",
      "zipcode": "OX3 9EH",
      "country": "United Kingdom",
      "geo_input": "Oxford,Oxfordshire,OX3 9EH,United Kingdom",
      "lat": 51.7624961,
      "lng": -1.2015969
    },
    {
      "city": "Oxford",
      "state": "Oxfordshire",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Oxford,Oxfordshire,,United Kingdom",
      "lat": 51.7520209,
      "lng": -1.2577263
    },
    {
      "city": "Dundee",
      "state": "Scotland",
      "zipcode": "Dd46se",
      "country": "United Kingdom",
      "geo_input": "Dundee,Scotland,Dd46se,United Kingdom",
      "lat": 56.47183,
      "lng": -2.962086
    },
    {
      "city": "Edinburgh",
      "state": "Scotland",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Edinburgh,Scotland,,United Kingdom",
      "lat": 55.953252,
      "lng": -3.188267
    },
    {
      "city": "Edinburgh",
      "state": "Scotland",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Edinburgh,Scotland,,United Kingdom",
      "lat": 55.953252,
      "lng": -3.188267
    },
    {
      "city": "Glasgow",
      "state": "Scotland",
      "zipcode": "G11 5JF",
      "country": "United Kingdom",
      "geo_input": "Glasgow,Scotland,G11 5JF,United Kingdom",
      "lat": 55.8736252,
      "lng": -4.2991394
    },
    {
      "city": "Glasgow",
      "state": "Scotland",
      "zipcode": "G12 0JG",
      "country": "United Kingdom",
      "geo_input": "Glasgow,Scotland,G12 0JG,United Kingdom",
      "lat": 55.8917774,
      "lng": -4.3032372
    },
    {
      "city": "Glasgow",
      "state": "Scotland",
      "zipcode": "G41 3PF",
      "country": "United Kingdom",
      "geo_input": "Glasgow,Scotland,G41 3PF,United Kingdom",
      "lat": 55.827333,
      "lng": -4.2855325
    },
    {
      "city": "Glasgow",
      "state": "Scotland",
      "zipcode": "G42 9JS",
      "country": "United Kingdom",
      "geo_input": "Glasgow,Scotland,G42 9JS,United Kingdom",
      "lat": 55.826626,
      "lng": -4.2657849
    },
    {
      "city": "Glasgow",
      "state": "Scotland",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Glasgow,Scotland,,United Kingdom",
      "lat": 55.864237,
      "lng": -4.251806
    },
    {
      "city": "Paisley",
      "state": "Scotland",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Paisley,Scotland,,United Kingdom",
      "lat": 55.847258,
      "lng": -4.440113999999999
    },
    {
      "city": "Bury St. Edmunds",
      "state": "Suffolk",
      "zipcode": "IP31 2NB",
      "country": "United Kingdom",
      "geo_input": "Bury St. Edmunds,Suffolk,IP31 2NB,United Kingdom",
      "lat": 52.290547,
      "lng": 0.8377608999999999
    },
    {
      "city": "London",
      "state": "Surrey",
      "zipcode": "KT3",
      "country": "United Kingdom",
      "geo_input": "London,Surrey,KT3,United Kingdom",
      "lat": 51.40066299999999,
      "lng": -0.259263
    },
    {
      "city": "Sunderland",
      "state": "Tyne and Wear",
      "zipcode": "SR2 0FL",
      "country": "United Kingdom",
      "geo_input": "Sunderland,Tyne and Wear,SR2 0FL,United Kingdom",
      "lat": 54.8818482,
      "lng": -1.376277
    },
    {
      "city": "Birmingham",
      "state": "West Midlands",
      "zipcode": "B1 1BB",
      "country": "United Kingdom",
      "geo_input": "Birmingham,West Midlands,B1 1BB,United Kingdom",
      "lat": 52.4805792,
      "lng": -1.9031881
    },
    {
      "city": "Stourbridge",
      "state": "West Midlands",
      "zipcode": "Dy8 2ta",
      "country": "United Kingdom",
      "geo_input": "Stourbridge,West Midlands,Dy8 2ta,United Kingdom",
      "lat": 52.4440414,
      "lng": -2.1590821
    },
    {
      "city": "Horsham",
      "state": "West Sussex",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Horsham,West Sussex,,United Kingdom",
      "lat": 51.062883,
      "lng": -0.325858
    },
    {
      "city": "Hebden Bridge",
      "state": "West Yorkshire",
      "zipcode": "HX7 7BT",
      "country": "United Kingdom",
      "geo_input": "Hebden Bridge,West Yorkshire,HX7 7BT,United Kingdom",
      "lat": 53.7432461,
      "lng": -2.0145434
    },
    {
      "city": "Leeds",
      "state": "West Yorkshire",
      "zipcode": "LS2 7EZ",
      "country": "United Kingdom",
      "geo_input": "Leeds,West Yorkshire,LS2 7EZ,United Kingdom",
      "lat": 53.7940772,
      "lng": -1.5358804
    },
    {
      "city": "Kidderminster",
      "state": "Worcestershire",
      "zipcode": "",
      "country": "United Kingdom",
      "geo_input": "Kidderminster,Worcestershire,,United Kingdom",
      "lat": 52.388596,
      "lng": -2.2496839
    },
    {
      "city": "Brighton",
      "state": "East Sussex",
      "zipcode": "BN2",
      "country": "United Kingdon",
      "geo_input": "Brighton,East Sussex,BN2,United Kingdon",
      "lat": 50.835201,
      "lng": -0.0802082
    },
    {
      "city": "Tempe",
      "state": "AZ",
      "zipcode": "85283-2032",
      "country": "United States",
      "geo_input": "Tempe,AZ,85283-2032,United States",
      "lat": 33.3774223,
      "lng": -111.9589134
    },
    {
      "city": "Tempe",
      "state": "AZ",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Tempe,AZ,,United States",
      "lat": 33.4255104,
      "lng": -111.9400054
    },
    {
      "city": "Tucson",
      "state": "AZ",
      "zipcode": "85712",
      "country": "United States",
      "geo_input": "Tucson,AZ,85712,United States",
      "lat": 32.2540946,
      "lng": -110.8850949
    },
    {
      "city": "Window Rock",
      "state": "AZ",
      "zipcode": "86515",
      "country": "United States",
      "geo_input": "Window Rock,AZ,86515,United States",
      "lat": 35.680573,
      "lng": -109.0525929
    },
    {
      "city": "Albany",
      "state": "CA",
      "zipcode": "94706",
      "country": "United States",
      "geo_input": "Albany,CA,94706,United States",
      "lat": 37.8883952,
      "lng": -122.2965778
    },
    {
      "city": "Campbell",
      "state": "CA",
      "zipcode": "95008",
      "country": "United States",
      "geo_input": "Campbell,CA,95008,United States",
      "lat": 37.2770029,
      "lng": -121.9529992
    },
    {
      "city": "East Hollywood",
      "state": "CA",
      "zipcode": "90038",
      "country": "United States",
      "geo_input": "East Hollywood,CA,90038,United States",
      "lat": 34.0895186,
      "lng": -118.3315838
    },
    {
      "city": "Huntington Beach",
      "state": "CA",
      "zipcode": "92647",
      "country": "United States",
      "geo_input": "Huntington Beach,CA,92647,United States",
      "lat": 33.7222674,
      "lng": -118.0010421
    },
    {
      "city": "Huntington Beach",
      "state": "CA",
      "zipcode": "92649",
      "country": "United States",
      "geo_input": "Huntington Beach,CA,92649,United States",
      "lat": 33.721051,
      "lng": -118.0478826
    },
    {
      "city": "Irvine",
      "state": "CA",
      "zipcode": "92618",
      "country": "United States",
      "geo_input": "Irvine,CA,92618,United States",
      "lat": 33.665242,
      "lng": -117.7490656
    },
    {
      "city": "Kagel Canyon",
      "state": "CA",
      "zipcode": "91342",
      "country": "United States",
      "geo_input": "Kagel Canyon,CA,91342,United States",
      "lat": 34.3005529,
      "lng": -118.3760984
    },
    {
      "city": "Long Beach",
      "state": "CA",
      "zipcode": "90803",
      "country": "United States",
      "geo_input": "Long Beach,CA,90803,United States",
      "lat": 33.7523035,
      "lng": -118.1298234
    },
    {
      "city": "Los Angeles",
      "state": "CA",
      "zipcode": "90019",
      "country": "United States",
      "geo_input": "Los Angeles,CA,90019,United States",
      "lat": 34.0489277,
      "lng": -118.3403506
    },
    {
      "city": "Los Angeles",
      "state": "CA",
      "zipcode": "90025",
      "country": "United States",
      "geo_input": "Los Angeles,CA,90025,United States",
      "lat": 34.0448583,
      "lng": -118.4484367
    },
    {
      "city": "Los Angeles",
      "state": "CA",
      "zipcode": "90027",
      "country": "United States",
      "geo_input": "Los Angeles,CA,90027,United States",
      "lat": 34.1220545,
      "lng": -118.2935891
    },
    {
      "city": "Los Angeles",
      "state": "CA",
      "zipcode": "90046",
      "country": "United States",
      "geo_input": "Los Angeles,CA,90046,United States",
      "lat": 34.1147313,
      "lng": -118.3637264
    },
    {
      "city": "Los Angeles",
      "state": "CA",
      "zipcode": "90066",
      "country": "United States",
      "geo_input": "Los Angeles,CA,90066,United States",
      "lat": 34.0050173,
      "lng": -118.4338345
    },
    {
      "city": "Los Angeles",
      "state": "CA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Los Angeles,CA,,United States",
      "lat": 34.0522342,
      "lng": -118.2436849
    },
    {
      "city": "Los Banos",
      "state": "CA",
      "zipcode": "93635",
      "country": "United States",
      "geo_input": "Los Banos,CA,93635,United States",
      "lat": 37.0582786,
      "lng": -120.8499151
    },
    {
      "city": "Los Osos",
      "state": "CA",
      "zipcode": "93412",
      "country": "United States",
      "geo_input": "Los Osos,CA,93412,United States",
      "lat": 35.31,
      "lng": -120.83
    },
    {
      "city": "Monterey",
      "state": "CA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Monterey,CA,,United States",
      "lat": 36.6002378,
      "lng": -121.8946761
    },
    {
      "city": "Oakland",
      "state": "CA",
      "zipcode": "94607",
      "country": "United States",
      "geo_input": "Oakland,CA,94607,United States",
      "lat": 37.8134679,
      "lng": -122.307917
    },
    {
      "city": "Oakland",
      "state": "CA",
      "zipcode": "94608-2352",
      "country": "United States",
      "geo_input": "Oakland,CA,94608-2352,United States",
      "lat": 37.8043514,
      "lng": -122.2711639
    },
    {
      "city": "Oakland",
      "state": "CA",
      "zipcode": "94611",
      "country": "United States",
      "geo_input": "Oakland,CA,94611,United States",
      "lat": 37.8336281,
      "lng": -122.2029832
    },
    {
      "city": "Oakland",
      "state": "CA",
      "zipcode": "94611",
      "country": "United States",
      "geo_input": "Oakland,CA,94611,United States",
      "lat": 37.8336281,
      "lng": -122.2029832
    },
    {
      "city": "Oakland",
      "state": "CA",
      "zipcode": "94619",
      "country": "United States",
      "geo_input": "Oakland,CA,94619,United States",
      "lat": 37.7936811,
      "lng": -122.1462193
    },
    {
      "city": "Pasadena",
      "state": "CA",
      "zipcode": "91101",
      "country": "United States",
      "geo_input": "Pasadena,CA,91101,United States",
      "lat": 34.1427587,
      "lng": -118.1386005
    },
    {
      "city": "Pasadena",
      "state": "CA",
      "zipcode": "91104",
      "country": "United States",
      "geo_input": "Pasadena,CA,91104,United States",
      "lat": 34.1657707,
      "lng": -118.1181199
    },
    {
      "city": "Petaluma",
      "state": "CA",
      "zipcode": "94952",
      "country": "United States",
      "geo_input": "Petaluma,CA,94952,United States",
      "lat": 38.232417,
      "lng": -122.6366524
    },
    {
      "city": "Playa Del Rey",
      "state": "CA",
      "zipcode": "90293",
      "country": "United States",
      "geo_input": "Playa Del Rey,CA,90293,United States",
      "lat": 33.9508728,
      "lng": -118.4455164
    },
    {
      "city": "Pomona",
      "state": "CA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Pomona,CA,,United States",
      "lat": 34.055103,
      "lng": -117.7499909
    },
    {
      "city": "Redlands",
      "state": "CA",
      "zipcode": "92359",
      "country": "United States",
      "geo_input": "Redlands,CA,92359,United States",
      "lat": 34.097004,
      "lng": -117.0676398
    },
    {
      "city": "Redwood City",
      "state": "CA",
      "zipcode": "94062",
      "country": "United States",
      "geo_input": "Redwood City,CA,94062,United States",
      "lat": 37.4847955,
      "lng": -122.228141
    },
    {
      "city": "Rohnert Park",
      "state": "CA",
      "zipcode": "94928",
      "country": "United States",
      "geo_input": "Rohnert Park,CA,94928,United States",
      "lat": 38.3437823,
      "lng": -122.7011951
    },
    {
      "city": "San Diego",
      "state": "CA",
      "zipcode": "92107",
      "country": "United States",
      "geo_input": "San Diego,CA,92107,United States",
      "lat": 32.7409782,
      "lng": -117.2499749
    },
    {
      "city": "San Diego",
      "state": "CA",
      "zipcode": "92116",
      "country": "United States",
      "geo_input": "San Diego,CA,92116,United States",
      "lat": 32.7679176,
      "lng": -117.1235339
    },
    {
      "city": "San Diego",
      "state": "CA",
      "zipcode": "92122",
      "country": "United States",
      "geo_input": "San Diego,CA,92122,United States",
      "lat": 32.8563846,
      "lng": -117.2029363
    },
    {
      "city": "San Diego",
      "state": "CA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "San Diego,CA,,United States",
      "lat": 32.715738,
      "lng": -117.1610838
    },
    {
      "city": "San Diego",
      "state": "CA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "San Diego,CA,,United States",
      "lat": 32.715738,
      "lng": -117.1610838
    },
    {
      "city": "San Francisco",
      "state": "CA",
      "zipcode": "94107",
      "country": "United States",
      "geo_input": "San Francisco,CA,94107,United States",
      "lat": 37.7618242,
      "lng": -122.3985871
    },
    {
      "city": "San Francisco",
      "state": "CA",
      "zipcode": "94118",
      "country": "United States",
      "geo_input": "San Francisco,CA,94118,United States",
      "lat": 37.7822891,
      "lng": -122.463708
    },
    {
      "city": "San Francisco",
      "state": "CA",
      "zipcode": "94118",
      "country": "United States",
      "geo_input": "San Francisco,CA,94118,United States",
      "lat": 37.7822891,
      "lng": -122.463708
    },
    {
      "city": "San Leandro",
      "state": "CA",
      "zipcode": "94578",
      "country": "United States",
      "geo_input": "San Leandro,CA,94578,United States",
      "lat": 37.7050703,
      "lng": -122.1235054
    },
    {
      "city": "San Luis Obispo",
      "state": "CA",
      "zipcode": "93401",
      "country": "United States",
      "geo_input": "San Luis Obispo,CA,93401,United States",
      "lat": 35.2827524,
      "lng": -120.6596156
    },
    {
      "city": "Santa Barbara",
      "state": "CA",
      "zipcode": "93101",
      "country": "United States",
      "geo_input": "Santa Barbara,CA,93101,United States",
      "lat": 34.420334,
      "lng": -119.7107494
    },
    {
      "city": "Santa Barbara",
      "state": "CA",
      "zipcode": "93101",
      "country": "United States",
      "geo_input": "Santa Barbara,CA,93101,United States",
      "lat": 34.420334,
      "lng": -119.7107494
    },
    {
      "city": "Santa Cruz",
      "state": "CA",
      "zipcode": "95060",
      "country": "United States",
      "geo_input": "Santa Cruz,CA,95060,United States",
      "lat": 36.9741171,
      "lng": -122.0307963
    },
    {
      "city": "Santa Cruz",
      "state": "CA",
      "zipcode": "95060",
      "country": "United States",
      "geo_input": "Santa Cruz,CA,95060,United States",
      "lat": 36.9741171,
      "lng": -122.0307963
    },
    {
      "city": "Santa Maria",
      "state": "CA",
      "zipcode": "93455",
      "country": "United States",
      "geo_input": "Santa Maria,CA,93455,United States",
      "lat": 34.9530337,
      "lng": -120.4357191
    },
    {
      "city": "Sherman Oaks",
      "state": "CA",
      "zipcode": "91403",
      "country": "United States",
      "geo_input": "Sherman Oaks,CA,91403,United States",
      "lat": 34.1423899,
      "lng": -118.4571974
    },
    {
      "city": "Sunnyvale",
      "state": "CA",
      "zipcode": "94087",
      "country": "United States",
      "geo_input": "Sunnyvale,CA,94087,United States",
      "lat": 37.3492097,
      "lng": -122.0326019
    },
    {
      "city": "Colorado Springs",
      "state": "CO",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Colorado Springs,CO,,United States",
      "lat": 38.8338816,
      "lng": -104.8213634
    },
    {
      "city": "Denver",
      "state": "CO",
      "zipcode": "80209",
      "country": "United States",
      "geo_input": "Denver,CO,80209,United States",
      "lat": 39.7069307,
      "lng": -104.9564084
    },
    {
      "city": "Denver",
      "state": "CO",
      "zipcode": "80236",
      "country": "United States",
      "geo_input": "Denver,CO,80236,United States",
      "lat": 39.6478446,
      "lng": -105.0411298
    },
    {
      "city": "Denver",
      "state": "CO",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Denver,CO,,United States",
      "lat": 39.7392358,
      "lng": -104.990251
    },
    {
      "city": "Denver",
      "state": "CO",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Denver,CO,,United States",
      "lat": 39.7392358,
      "lng": -104.990251
    },
    {
      "city": "Denver",
      "state": "CO",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Denver,CO,,United States",
      "lat": 39.7392358,
      "lng": -104.990251
    },
    {
      "city": "Tabernash",
      "state": "CO",
      "zipcode": "80478",
      "country": "United States",
      "geo_input": "Tabernash,CO,80478,United States",
      "lat": 39.9935977,
      "lng": -105.8430661
    },
    {
      "city": "Wray",
      "state": "CO",
      "zipcode": "80758",
      "country": "United States",
      "geo_input": "Wray,CO,80758,United States",
      "lat": 40.0758231,
      "lng": -102.2232495
    },
    {
      "city": "Beacon Falls",
      "state": "CT",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Beacon Falls,CT,,United States",
      "lat": 41.4426452,
      "lng": -73.06176119999999
    },
    {
      "city": "Hartford",
      "state": "CT",
      "zipcode": "06105",
      "country": "United States",
      "geo_input": "Hartford,CT,06105,United States",
      "lat": 41.77210609999999,
      "lng": -72.70380469999999
    },
    {
      "city": "Middletown",
      "state": "CT",
      "zipcode": "06457",
      "country": "United States",
      "geo_input": "Middletown,CT,06457,United States",
      "lat": 41.5460323,
      "lng": -72.6505957
    },
    {
      "city": "Middletown",
      "state": "CT",
      "zipcode": "06457-3146",
      "country": "United States",
      "geo_input": "Middletown,CT,06457-3146,United States",
      "lat": 41.5623209,
      "lng": -72.6506488
    },
    {
      "city": "North Haven",
      "state": "CT",
      "zipcode": "06473-1815",
      "country": "United States",
      "geo_input": "North Haven,CT,06473-1815,United States",
      "lat": 41.39091390000001,
      "lng": -72.8595447
    },
    {
      "city": "Storrs",
      "state": "CT",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Storrs,CT,,United States",
      "lat": 41.8084314,
      "lng": -72.24952309999999
    },
    {
      "city": "West Cornwall",
      "state": "CT",
      "zipcode": "10025",
      "country": "United States",
      "geo_input": "West Cornwall,CT,10025,United States",
      "lat": 41.8714254,
      "lng": -73.361796
    },
    {
      "city": "West Hartford",
      "state": "CT",
      "zipcode": "06119",
      "country": "United States",
      "geo_input": "West Hartford,CT,06119,United States",
      "lat": 41.7660981,
      "lng": -72.72744949999999
    },
    {
      "city": "Willimantic",
      "state": "CT",
      "zipcode": "06226",
      "country": "United States",
      "geo_input": "Willimantic,CT,06226,United States",
      "lat": 41.7133607,
      "lng": -72.20676809999999
    },
    {
      "city": "Windsor Locks",
      "state": "CT",
      "zipcode": "06096-1417",
      "country": "United States",
      "geo_input": "Windsor Locks,CT,06096-1417,United States",
      "lat": 41.9242917,
      "lng": -72.6454469
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "20001",
      "country": "United States",
      "geo_input": "Washington,DC,20001,United States",
      "lat": 38.912068,
      "lng": -77.0190228
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "20003",
      "country": "United States",
      "geo_input": "Washington,DC,20003,United States",
      "lat": 38.8831372,
      "lng": -76.9902276
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "20008",
      "country": "United States",
      "geo_input": "Washington,DC,20008,United States",
      "lat": 38.9451658,
      "lng": -77.0622028
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "20008",
      "country": "United States",
      "geo_input": "Washington,DC,20008,United States",
      "lat": 38.9451658,
      "lng": -77.0622028
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "20009",
      "country": "United States",
      "geo_input": "Washington,DC,20009,United States",
      "lat": 38.9191485,
      "lng": -77.0362967
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "20009",
      "country": "United States",
      "geo_input": "Washington,DC,20009,United States",
      "lat": 38.9191485,
      "lng": -77.0362967
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "20010",
      "country": "United States",
      "geo_input": "Washington,DC,20010,United States",
      "lat": 38.9339046,
      "lng": -77.03053899999999
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "20018",
      "country": "United States",
      "geo_input": "Washington,DC,20018,United States",
      "lat": 38.9274061,
      "lng": -76.9729472
    },
    {
      "city": "Washington",
      "state": "DC",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Washington,DC,,United States",
      "lat": 38.9071923,
      "lng": -77.0368707
    },
    {
      "city": "Dover",
      "state": "DE",
      "zipcode": "19901",
      "country": "United States",
      "geo_input": "Dover,DE,19901,United States",
      "lat": 39.2081349,
      "lng": -75.45777749999999
    },
    {
      "city": "Townsend",
      "state": "DE",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Townsend,DE,,United States",
      "lat": 39.3951115,
      "lng": -75.6915973
    },
    {
      "city": "Boca Raton",
      "state": "FL",
      "zipcode": "33431",
      "country": "United States",
      "geo_input": "Boca Raton,FL,33431,United States",
      "lat": 26.3767589,
      "lng": -80.1037721
    },
    {
      "city": "Clermont",
      "state": "FL",
      "zipcode": "34715",
      "country": "United States",
      "geo_input": "Clermont,FL,34715,United States",
      "lat": 28.6415986,
      "lng": -81.7239979
    },
    {
      "city": "Hallandale",
      "state": "FL",
      "zipcode": "33009",
      "country": "United States",
      "geo_input": "Hallandale,FL,33009,United States",
      "lat": 25.9812024,
      "lng": -80.14837899999999
    },
    {
      "city": "Jacksonville",
      "state": "FL",
      "zipcode": "32205",
      "country": "United States",
      "geo_input": "Jacksonville,FL,32205,United States",
      "lat": 30.3065729,
      "lng": -81.7294702
    },
    {
      "city": "Miami",
      "state": "FL",
      "zipcode": "33137",
      "country": "United States",
      "geo_input": "Miami,FL,33137,United States",
      "lat": 25.8207159,
      "lng": -80.1819268
    },
    {
      "city": "Orlando",
      "state": "FL",
      "zipcode": "34787",
      "country": "United States",
      "geo_input": "Orlando,FL,34787,United States",
      "lat": 28.4385186,
      "lng": -81.6254283
    },
    {
      "city": "Port Orange",
      "state": "FL",
      "zipcode": "32128",
      "country": "United States",
      "geo_input": "Port Orange,FL,32128,United States",
      "lat": 29.084946,
      "lng": -81.0644263
    },
    {
      "city": "sarasota",
      "state": "FL",
      "zipcode": "34240",
      "country": "United States",
      "geo_input": "sarasota,FL,34240,United States",
      "lat": 27.3275324,
      "lng": -82.33433749999999
    },
    {
      "city": "Tampa",
      "state": "FL",
      "zipcode": "33624",
      "country": "United States",
      "geo_input": "Tampa,FL,33624,United States",
      "lat": 28.0899262,
      "lng": -82.5239953
    },
    {
      "city": "Atlanta",
      "state": "GA",
      "zipcode": "30083",
      "country": "United States",
      "geo_input": "Atlanta,GA,30083,United States",
      "lat": 33.7994803,
      "lng": -84.1909841
    },
    {
      "city": "atlanta",
      "state": "GA",
      "zipcode": "30306",
      "country": "United States",
      "geo_input": "atlanta,GA,30306,United States",
      "lat": 33.7845409,
      "lng": -84.3489467
    },
    {
      "city": "Macon",
      "state": "GA",
      "zipcode": "31220",
      "country": "United States",
      "geo_input": "Macon,GA,31220,United States",
      "lat": 32.9042047,
      "lng": -83.8260884
    },
    {
      "city": "Smyrna",
      "state": "GA",
      "zipcode": "30080",
      "country": "United States",
      "geo_input": "Smyrna,GA,30080,United States",
      "lat": 33.8806897,
      "lng": -84.5064881
    },
    {
      "city": "Honolulu",
      "state": "HI",
      "zipcode": "96816",
      "country": "United States",
      "geo_input": "Honolulu,HI,96816,United States",
      "lat": 21.2868901,
      "lng": -157.7973653
    },
    {
      "city": "Des Moines",
      "state": "IA",
      "zipcode": "50315",
      "country": "United States",
      "geo_input": "Des Moines,IA,50315,United States",
      "lat": 41.5346558,
      "lng": -93.61164939999999
    },
    {
      "city": "Lone Tree",
      "state": "IA",
      "zipcode": "52755",
      "country": "United States",
      "geo_input": "Lone Tree,IA,52755,United States",
      "lat": 41.4880775,
      "lng": -91.425994
    },
    {
      "city": "North Liberty",
      "state": "IA",
      "zipcode": "52317",
      "country": "United States",
      "geo_input": "North Liberty,IA,52317,United States",
      "lat": 41.739482,
      "lng": -91.60809739999999
    },
    {
      "city": "Nampa",
      "state": "ID",
      "zipcode": "83686",
      "country": "United States",
      "geo_input": "Nampa,ID,83686,United States",
      "lat": 43.48913719999999,
      "lng": -116.589439
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60610",
      "country": "United States",
      "geo_input": "Chicago,IL,60610,United States",
      "lat": 41.9003099,
      "lng": -87.63338710000001
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60613",
      "country": "United States",
      "geo_input": "Chicago,IL,60613,United States",
      "lat": 41.9577761,
      "lng": -87.6556468
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60615",
      "country": "United States",
      "geo_input": "Chicago,IL,60615,United States",
      "lat": 41.8003921,
      "lng": -87.603826
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60622",
      "country": "United States",
      "geo_input": "Chicago,IL,60622,United States",
      "lat": 41.9013087,
      "lng": -87.68276759999999
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60625",
      "country": "United States",
      "geo_input": "Chicago,IL,60625,United States",
      "lat": 41.9711068,
      "lng": -87.70248169999999
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60630",
      "country": "United States",
      "geo_input": "Chicago,IL,60630,United States",
      "lat": 41.9720786,
      "lng": -87.7517295
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60637",
      "country": "United States",
      "geo_input": "Chicago,IL,60637,United States",
      "lat": 41.7805099,
      "lng": -87.603826
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60640",
      "country": "United States",
      "geo_input": "Chicago,IL,60640,United States",
      "lat": 41.9703133,
      "lng": -87.663045
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60640",
      "country": "United States",
      "geo_input": "Chicago,IL,60640,United States",
      "lat": 41.9703133,
      "lng": -87.663045
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60640",
      "country": "United States",
      "geo_input": "Chicago,IL,60640,United States",
      "lat": 41.9703133,
      "lng": -87.663045
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60640",
      "country": "United States",
      "geo_input": "Chicago,IL,60640,United States",
      "lat": 41.9703133,
      "lng": -87.663045
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60640",
      "country": "United States",
      "geo_input": "Chicago,IL,60640,United States",
      "lat": 41.9703133,
      "lng": -87.663045
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60647",
      "country": "United States",
      "geo_input": "Chicago,IL,60647,United States",
      "lat": 41.9215421,
      "lng": -87.70248169999999
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60659",
      "country": "United States",
      "geo_input": "Chicago,IL,60659,United States",
      "lat": 41.9909198,
      "lng": -87.70248169999999
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60660",
      "country": "United States",
      "geo_input": "Chicago,IL,60660,United States",
      "lat": 41.9901263,
      "lng": -87.663045
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "606660",
      "country": "United States",
      "geo_input": "Chicago,IL,606660,United States",
      "lat": 41.8781136,
      "lng": -87.6297982
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Chicago,IL,,United States",
      "lat": 41.8781136,
      "lng": -87.6297982
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Chicago,IL,,United States",
      "lat": 41.8781136,
      "lng": -87.6297982
    },
    {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Chicago,IL,,United States",
      "lat": 41.8781136,
      "lng": -87.6297982
    },
    {
      "city": "Elk Grove Village",
      "state": "IL",
      "zipcode": "60007",
      "country": "United States",
      "geo_input": "Elk Grove Village,IL,60007,United States",
      "lat": 42.0039178,
      "lng": -87.9703461
    },
    {
      "city": "Farmington",
      "state": "IL",
      "zipcode": "61531",
      "country": "United States",
      "geo_input": "Farmington,IL,61531,United States",
      "lat": 40.6980932,
      "lng": -90.0059483
    },
    {
      "city": "Mount Prospect",
      "state": "IL",
      "zipcode": "60056-3146",
      "country": "United States",
      "geo_input": "Mount Prospect,IL,60056-3146,United States",
      "lat": 42.0646736,
      "lng": -87.93838219999999
    },
    {
      "city": "Plainfield",
      "state": "IL",
      "zipcode": "60586-5644",
      "country": "United States",
      "geo_input": "Plainfield,IL,60586-5644,United States",
      "lat": 41.5726561,
      "lng": -88.23151299999999
    },
    {
      "city": "Indianapolis",
      "state": "IN",
      "zipcode": "46221",
      "country": "United States",
      "geo_input": "Indianapolis,IN,46221,United States",
      "lat": 39.6841663,
      "lng": -86.2463337
    },
    {
      "city": "New Albany",
      "state": "IN",
      "zipcode": "47150",
      "country": "United States",
      "geo_input": "New Albany,IN,47150,United States",
      "lat": 38.2856247,
      "lng": -85.8241312
    },
    {
      "city": "Newburgh",
      "state": "IN",
      "zipcode": "47630",
      "country": "United States",
      "geo_input": "Newburgh,IN,47630,United States",
      "lat": 37.9444882,
      "lng": -87.4052865
    },
    {
      "city": "Noblesville",
      "state": "IN",
      "zipcode": "46060",
      "country": "United States",
      "geo_input": "Noblesville,IN,46060,United States",
      "lat": 40.0542448,
      "lng": -85.95089229999999
    },
    {
      "city": "West Lafayette",
      "state": "IN",
      "zipcode": "47906",
      "country": "United States",
      "geo_input": "West Lafayette,IN,47906,United States",
      "lat": 40.4258686,
      "lng": -86.90806549999999
    },
    {
      "city": "West Lafayette",
      "state": "IN",
      "zipcode": "47906",
      "country": "United States",
      "geo_input": "West Lafayette,IN,47906,United States",
      "lat": 40.4258686,
      "lng": -86.90806549999999
    },
    {
      "city": "Topeka",
      "state": "KS",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Topeka,KS,,United States",
      "lat": 39.0473451,
      "lng": -95.67515759999999
    },
    {
      "city": "Lexington",
      "state": "KY",
      "zipcode": "40503",
      "country": "United States",
      "geo_input": "Lexington,KY,40503,United States",
      "lat": 38.0103355,
      "lng": -84.5327038
    },
    {
      "city": "Louisville",
      "state": "KY",
      "zipcode": "40242-6901",
      "country": "United States",
      "geo_input": "Louisville,KY,40242-6901,United States",
      "lat": 38.2786886,
      "lng": -85.589507
    },
    {
      "city": "Louisville",
      "state": "KY",
      "zipcode": "40299",
      "country": "United States",
      "geo_input": "Louisville,KY,40299,United States",
      "lat": 38.1673072,
      "lng": -85.49941919999999
    },
    {
      "city": "Madinsonville",
      "state": "KY",
      "zipcode": "42431",
      "country": "United States",
      "geo_input": "Madinsonville,KY,42431,United States",
      "lat": 37.32810050000001,
      "lng": -87.4988882
    },
    {
      "city": "New Orleans",
      "state": "LA",
      "zipcode": "70119",
      "country": "United States",
      "geo_input": "New Orleans,LA,70119,United States",
      "lat": 29.9798109,
      "lng": -90.07934879999999
    },
    {
      "city": "Belmont",
      "state": "MA",
      "zipcode": "02478",
      "country": "United States",
      "geo_input": "Belmont,MA,02478,United States",
      "lat": 42.3958849,
      "lng": -71.1745579
    },
    {
      "city": "Boston",
      "state": "MA",
      "zipcode": "02111",
      "country": "United States",
      "geo_input": "Boston,MA,02111,United States",
      "lat": 42.3514653,
      "lng": -71.0601767
    },
    {
      "city": "Cambridge",
      "state": "MA",
      "zipcode": "02138",
      "country": "United States",
      "geo_input": "Cambridge,MA,02138,United States",
      "lat": 42.3803274,
      "lng": -71.13891009999999
    },
    {
      "city": "Dracut",
      "state": "MA",
      "zipcode": "01826",
      "country": "United States",
      "geo_input": "Dracut,MA,01826,United States",
      "lat": 42.6705383,
      "lng": -71.3000493
    },
    {
      "city": "Granby",
      "state": "MA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Granby,MA,,United States",
      "lat": 42.2570866,
      "lng": -72.51688589999999
    },
    {
      "city": "Hopedale",
      "state": "MA",
      "zipcode": "01747",
      "country": "United States",
      "geo_input": "Hopedale,MA,01747,United States",
      "lat": 42.1221817,
      "lng": -71.5308508
    },
    {
      "city": "Lexington",
      "state": "MA",
      "zipcode": "02420",
      "country": "United States",
      "geo_input": "Lexington,MA,02420,United States",
      "lat": 42.4609077,
      "lng": -71.2220832
    },
    {
      "city": "Medford",
      "state": "MA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Medford,MA,,United States",
      "lat": 42.4184296,
      "lng": -71.1061639
    },
    {
      "city": "North Billerica",
      "state": "MA",
      "zipcode": "01862",
      "country": "United States",
      "geo_input": "North Billerica,MA,01862,United States",
      "lat": 42.5831997,
      "lng": -71.28486629999999
    },
    {
      "city": "Shrewsbury",
      "state": "MA",
      "zipcode": "01545",
      "country": "United States",
      "geo_input": "Shrewsbury,MA,01545,United States",
      "lat": 42.2834603,
      "lng": -71.726659
    },
    {
      "city": "Somerville",
      "state": "MA",
      "zipcode": "02143",
      "country": "United States",
      "geo_input": "Somerville,MA,02143,United States",
      "lat": 42.3808757,
      "lng": -71.1002881
    },
    {
      "city": "Stoneham",
      "state": "MA",
      "zipcode": "02180",
      "country": "United States",
      "geo_input": "Stoneham,MA,02180,United States",
      "lat": 42.4766331,
      "lng": -71.0913748
    },
    {
      "city": "Westfield",
      "state": "MA",
      "zipcode": "01085",
      "country": "United States",
      "geo_input": "Westfield,MA,01085,United States",
      "lat": 42.1250929,
      "lng": -72.749538
    },
    {
      "city": "Baltimore",
      "state": "MD",
      "zipcode": "21211",
      "country": "United States",
      "geo_input": "Baltimore,MD,21211,United States",
      "lat": 39.3289463,
      "lng": -76.63838319999999
    },
    {
      "city": "Columbia",
      "state": "MD",
      "zipcode": "21044",
      "country": "United States",
      "geo_input": "Columbia,MD,21044,United States",
      "lat": 39.206658,
      "lng": -76.8836261
    },
    {
      "city": "Fort Washington",
      "state": "MD",
      "zipcode": "20744",
      "country": "United States",
      "geo_input": "Fort Washington,MD,20744,United States",
      "lat": 38.7478222,
      "lng": -76.9988669
    },
    {
      "city": "Jessup",
      "state": "MD",
      "zipcode": "20794",
      "country": "United States",
      "geo_input": "Jessup,MD,20794,United States",
      "lat": 39.1492746,
      "lng": -76.7752493
    },
    {
      "city": "Ocean City",
      "state": "MD",
      "zipcode": "21842",
      "country": "United States",
      "geo_input": "Ocean City,MD,21842,United States",
      "lat": 38.3358442,
      "lng": -75.0853092
    },
    {
      "city": "Pasadena",
      "state": "MD",
      "zipcode": "21122",
      "country": "United States",
      "geo_input": "Pasadena,MD,21122,United States",
      "lat": 39.1073317,
      "lng": -76.57107529999999
    },
    {
      "city": "Pikesville",
      "state": "MD",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Pikesville,MD,,United States",
      "lat": 39.3742729,
      "lng": -76.7224727
    },
    {
      "city": "Riverdale",
      "state": "MD",
      "zipcode": "20737",
      "country": "United States",
      "geo_input": "Riverdale,MD,20737,United States",
      "lat": 38.95903810000001,
      "lng": -76.9124465
    },
    {
      "city": "Silver Spring",
      "state": "MD",
      "zipcode": "20910",
      "country": "United States",
      "geo_input": "Silver Spring,MD,20910,United States",
      "lat": 39.0041504,
      "lng": -77.03917539999999
    },
    {
      "city": "Auburn",
      "state": "ME",
      "zipcode": "04210",
      "country": "United States",
      "geo_input": "Auburn,ME,04210,United States",
      "lat": 44.0978509,
      "lng": -70.2311655
    },
    {
      "city": "Augusta",
      "state": "ME",
      "zipcode": "04330",
      "country": "United States",
      "geo_input": "Augusta,ME,04330,United States",
      "lat": 44.3106241,
      "lng": -69.7794897
    },
    {
      "city": "Jonesport",
      "state": "ME",
      "zipcode": "04649",
      "country": "United States",
      "geo_input": "Jonesport,ME,04649,United States",
      "lat": 44.5517226,
      "lng": -67.608693
    },
    {
      "city": "Portland",
      "state": "ME",
      "zipcode": "04101",
      "country": "United States",
      "geo_input": "Portland,ME,04101,United States",
      "lat": 43.6629964,
      "lng": -70.2568775
    },
    {
      "city": "Portland",
      "state": "ME",
      "zipcode": "04101",
      "country": "United States",
      "geo_input": "Portland,ME,04101,United States",
      "lat": 43.6629964,
      "lng": -70.2568775
    },
    {
      "city": "Ann Arbor",
      "state": "MI",
      "zipcode": "48103",
      "country": "United States",
      "geo_input": "Ann Arbor,MI,48103,United States",
      "lat": 42.24758629999999,
      "lng": -83.8260884
    },
    {
      "city": "Ann Arbor",
      "state": "MI",
      "zipcode": "48103",
      "country": "United States",
      "geo_input": "Ann Arbor,MI,48103,United States",
      "lat": 42.24758629999999,
      "lng": -83.8260884
    },
    {
      "city": "Ann Arbor",
      "state": "MI",
      "zipcode": "48104",
      "country": "United States",
      "geo_input": "Ann Arbor,MI,48104,United States",
      "lat": 42.2660881,
      "lng": -83.7146001
    },
    {
      "city": "Belleville",
      "state": "MI",
      "zipcode": "48111",
      "country": "United States",
      "geo_input": "Belleville,MI,48111,United States",
      "lat": 42.2047619,
      "lng": -83.4852133
    },
    {
      "city": "Clio",
      "state": "MI",
      "zipcode": "48420",
      "country": "United States",
      "geo_input": "Clio,MI,48420,United States",
      "lat": 43.1775256,
      "lng": -83.73412739999999
    },
    {
      "city": "Goodrich",
      "state": "MI",
      "zipcode": "48438",
      "country": "United States",
      "geo_input": "Goodrich,MI,48438,United States",
      "lat": 42.916972,
      "lng": -83.5063365
    },
    {
      "city": "Grand Haven",
      "state": "MI",
      "zipcode": "49417",
      "country": "United States",
      "geo_input": "Grand Haven,MI,49417,United States",
      "lat": 43.0630734,
      "lng": -86.22838639999999
    },
    {
      "city": "Grand Rapids",
      "state": "MI",
      "zipcode": "49428",
      "country": "United States",
      "geo_input": "Grand Rapids,MI,49428,United States",
      "lat": 42.9242371,
      "lng": -85.8281458
    },
    {
      "city": "Grand Rapids",
      "state": "MI",
      "zipcode": "49503",
      "country": "United States",
      "geo_input": "Grand Rapids,MI,49503,United States",
      "lat": 42.9616689,
      "lng": -85.6588999
    },
    {
      "city": "Spring Lake",
      "state": "MI",
      "zipcode": "49456",
      "country": "United States",
      "geo_input": "Spring Lake,MI,49456,United States",
      "lat": 43.07696250000001,
      "lng": -86.19699709999999
    },
    {
      "city": "Ypsilanti",
      "state": "MI",
      "zipcode": "48198",
      "country": "United States",
      "geo_input": "Ypsilanti,MI,48198,United States",
      "lat": 42.2411499,
      "lng": -83.61299389999999
    },
    {
      "city": "Hibbing",
      "state": "MN",
      "zipcode": "55746",
      "country": "United States",
      "geo_input": "Hibbing,MN,55746,United States",
      "lat": 47.3332794,
      "lng": -92.93106859999999
    },
    {
      "city": "Jackson",
      "state": "MN",
      "zipcode": "56143",
      "country": "United States",
      "geo_input": "Jackson,MN,56143,United States",
      "lat": 43.6207915,
      "lng": -94.9886022
    },
    {
      "city": "Minneapolis",
      "state": "MN",
      "zipcode": "55407",
      "country": "United States",
      "geo_input": "Minneapolis,MN,55407,United States",
      "lat": 44.9398026,
      "lng": -93.2533339
    },
    {
      "city": "Minneapolis",
      "state": "MN",
      "zipcode": "55407",
      "country": "United States",
      "geo_input": "Minneapolis,MN,55407,United States",
      "lat": 44.9398026,
      "lng": -93.2533339
    },
    {
      "city": "Minneapolis",
      "state": "MN",
      "zipcode": "55408",
      "country": "United States",
      "geo_input": "Minneapolis,MN,55408,United States",
      "lat": 44.9479791,
      "lng": -93.2935778
    },
    {
      "city": "Minneapolis",
      "state": "MN",
      "zipcode": "55409",
      "country": "United States",
      "geo_input": "Minneapolis,MN,55409,United States",
      "lat": 44.9296117,
      "lng": -93.2835137
    },
    {
      "city": "Minneapolis",
      "state": "MN",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Minneapolis,MN,,United States",
      "lat": 44.977753,
      "lng": -93.2650108
    },
    {
      "city": "Minneapolis",
      "state": "MN",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Minneapolis,MN,,United States",
      "lat": 44.977753,
      "lng": -93.2650108
    },
    {
      "city": "St. Paul",
      "state": "MN",
      "zipcode": "55104",
      "country": "United States",
      "geo_input": "St. Paul,MN,55104,United States",
      "lat": 44.9516643,
      "lng": -93.16290629999999
    },
    {
      "city": "Waite Park",
      "state": "MN",
      "zipcode": "56387",
      "country": "United States",
      "geo_input": "Waite Park,MN,56387,United States",
      "lat": 45.5124658,
      "lng": -94.2480903
    },
    {
      "city": "Kansas city",
      "state": "MO",
      "zipcode": "64118",
      "country": "United States",
      "geo_input": "Kansas city,MO,64118,United States",
      "lat": 39.220735,
      "lng": -94.5727598
    },
    {
      "city": "Kansas City",
      "state": "MO",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Kansas City,MO,,United States",
      "lat": 39.0997265,
      "lng": -94.5785667
    },
    {
      "city": "Springfield",
      "state": "MO",
      "zipcode": "65804",
      "country": "United States",
      "geo_input": "Springfield,MO,65804,United States",
      "lat": 37.1565149,
      "lng": -93.2483058
    },
    {
      "city": "St. Louis",
      "state": "MO",
      "zipcode": "63031",
      "country": "United States",
      "geo_input": "St. Louis,MO,63031,United States",
      "lat": 38.8095735,
      "lng": -90.3465971
    },
    {
      "city": "Asheboro",
      "state": "NC",
      "zipcode": "27205",
      "country": "United States",
      "geo_input": "Asheboro,NC,27205,United States",
      "lat": 35.7079146,
      "lng": -79.8136446
    },
    {
      "city": "Burlington",
      "state": "NC",
      "zipcode": "27215",
      "country": "United States",
      "geo_input": "Burlington,NC,27215,United States",
      "lat": 36.0956918,
      "lng": -79.43779909999999
    },
    {
      "city": "Carrboro",
      "state": "NC",
      "zipcode": "27510",
      "country": "United States",
      "geo_input": "Carrboro,NC,27510,United States",
      "lat": 35.9107512,
      "lng": -79.0814523
    },
    {
      "city": "Cary",
      "state": "NC",
      "zipcode": "27513",
      "country": "United States",
      "geo_input": "Cary,NC,27513,United States",
      "lat": 35.8129046,
      "lng": -78.78162189999999
    },
    {
      "city": "Cary",
      "state": "NC",
      "zipcode": "27519",
      "country": "United States",
      "geo_input": "Cary,NC,27519,United States",
      "lat": 35.8019588,
      "lng": -78.8948741
    },
    {
      "city": "Chapel Hill",
      "state": "NC",
      "zipcode": "27514",
      "country": "United States",
      "geo_input": "Chapel Hill,NC,27514,United States",
      "lat": 35.9722081,
      "lng": -79.04755589999999
    },
    {
      "city": "Durham",
      "state": "NC",
      "zipcode": "27701",
      "country": "United States",
      "geo_input": "Durham,NC,27701,United States",
      "lat": 35.9981205,
      "lng": -78.8920444
    },
    {
      "city": "Durham",
      "state": "NC",
      "zipcode": "27704",
      "country": "United States",
      "geo_input": "Durham,NC,27704,United States",
      "lat": 36.0323222,
      "lng": -78.8269385
    },
    {
      "city": "Durham",
      "state": "NC",
      "zipcode": "27705",
      "country": "United States",
      "geo_input": "Durham,NC,27705,United States",
      "lat": 36.025609,
      "lng": -78.9853813
    },
    {
      "city": "Matthews",
      "state": "NC",
      "zipcode": "28104",
      "country": "United States",
      "geo_input": "Matthews,NC,28104,United States",
      "lat": 35.1168131,
      "lng": -80.72368039999999
    },
    {
      "city": "Raleigh",
      "state": "NC",
      "zipcode": "27513",
      "country": "United States",
      "geo_input": "Raleigh,NC,27513,United States",
      "lat": 35.8129046,
      "lng": -78.78162189999999
    },
    {
      "city": "Wake Forest",
      "state": "NC",
      "zipcode": "27587",
      "country": "United States",
      "geo_input": "Wake Forest,NC,27587,United States",
      "lat": 35.9798734,
      "lng": -78.50972279999999
    },
    {
      "city": "Bismarck",
      "state": "ND",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Bismarck,ND,,United States",
      "lat": 46.8083268,
      "lng": -100.7837392
    },
    {
      "city": "Lincoln",
      "state": "NE",
      "zipcode": "68502",
      "country": "United States",
      "geo_input": "Lincoln,NE,68502,United States",
      "lat": 40.7895543,
      "lng": -96.7012424
    },
    {
      "city": "Omaha",
      "state": "NE",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Omaha,NE,,United States",
      "lat": 41.2565369,
      "lng": -95.9345034
    },
    {
      "city": "Lee",
      "state": "NH",
      "zipcode": "03861",
      "country": "United States",
      "geo_input": "Lee,NH,03861,United States",
      "lat": 43.1088938,
      "lng": -71.014118
    },
    {
      "city": "Peterborough",
      "state": "NH",
      "zipcode": "03458",
      "country": "United States",
      "geo_input": "Peterborough,NH,03458,United States",
      "lat": 42.8706048,
      "lng": -71.95167459999999
    },
    {
      "city": "Barnegat",
      "state": "NJ",
      "zipcode": "08005",
      "country": "United States",
      "geo_input": "Barnegat,NJ,08005,United States",
      "lat": 39.7878214,
      "lng": -74.3352858
    },
    {
      "city": "Burlington",
      "state": "NJ",
      "zipcode": "08016",
      "country": "United States",
      "geo_input": "Burlington,NJ,08016,United States",
      "lat": 40.071222,
      "lng": -74.86488729999999
    },
    {
      "city": "Carteret",
      "state": "NJ",
      "zipcode": "07008",
      "country": "United States",
      "geo_input": "Carteret,NJ,07008,United States",
      "lat": 40.5761692,
      "lng": -74.22380199999999
    },
    {
      "city": "Cherry Hill",
      "state": "NJ",
      "zipcode": "08034",
      "country": "United States",
      "geo_input": "Cherry Hill,NJ,08034,United States",
      "lat": 39.9021937,
      "lng": -74.9968543
    },
    {
      "city": "Eastampton",
      "state": "NJ",
      "zipcode": "08060",
      "country": "United States",
      "geo_input": "Eastampton,NJ,08060,United States",
      "lat": 40.0033813,
      "lng": -74.756468
    },
    {
      "city": "Gillette",
      "state": "NJ",
      "zipcode": "07933",
      "country": "United States",
      "geo_input": "Gillette,NJ,07933,United States",
      "lat": 40.69948369999999,
      "lng": -74.4701475
    },
    {
      "city": "Green Brook",
      "state": "NJ",
      "zipcode": "08812",
      "country": "United States",
      "geo_input": "Green Brook,NJ,08812,United States",
      "lat": 40.6019636,
      "lng": -74.4818698
    },
    {
      "city": "Hamilton",
      "state": "NJ",
      "zipcode": "08619",
      "country": "United States",
      "geo_input": "Hamilton,NJ,08619,United States",
      "lat": 40.2482028,
      "lng": -74.69858909999999
    },
    {
      "city": "Jersey City",
      "state": "NJ",
      "zipcode": "07306",
      "country": "United States",
      "geo_input": "Jersey City,NJ,07306,United States",
      "lat": 40.7329808,
      "lng": -74.0711359
    },
    {
      "city": "Middletown",
      "state": "NJ",
      "zipcode": "07748",
      "country": "United States",
      "geo_input": "Middletown,NJ,07748,United States",
      "lat": 40.3925365,
      "lng": -74.1181234
    },
    {
      "city": "New Brunswick",
      "state": "NJ",
      "zipcode": "08901",
      "country": "United States",
      "geo_input": "New Brunswick,NJ,08901,United States",
      "lat": 40.4861552,
      "lng": -74.45185
    },
    {
      "city": "Albuquerque",
      "state": "NM",
      "zipcode": "87108",
      "country": "United States",
      "geo_input": "Albuquerque,NM,87108,United States",
      "lat": 35.0734065,
      "lng": -106.5760857
    },
    {
      "city": "Las Cruces",
      "state": "NM",
      "zipcode": "88007",
      "country": "United States",
      "geo_input": "Las Cruces,NM,88007,United States",
      "lat": 32.3199396,
      "lng": -106.7636538
    },
    {
      "city": "Santa Fe",
      "state": "NM",
      "zipcode": "87508",
      "country": "United States",
      "geo_input": "Santa Fe,NM,87508,United States",
      "lat": 35.6869752,
      "lng": -105.937799
    },
    {
      "city": "Carson City",
      "state": "NV",
      "zipcode": "89706",
      "country": "United States",
      "geo_input": "Carson City,NV,89706,United States",
      "lat": 39.2246072,
      "lng": -119.7078532
    },
    {
      "city": "Las Vegas",
      "state": "NV",
      "zipcode": "89134",
      "country": "United States",
      "geo_input": "Las Vegas,NV,89134,United States",
      "lat": 36.2085091,
      "lng": -115.3133908
    },
    {
      "city": "Astoria",
      "state": "NY",
      "zipcode": "11105",
      "country": "United States",
      "geo_input": "Astoria,NY,11105,United States",
      "lat": 40.7787902,
      "lng": -73.9065883
    },
    {
      "city": "Bronx",
      "state": "NY",
      "zipcode": "10470",
      "country": "United States",
      "geo_input": "Bronx,NY,10470,United States",
      "lat": 40.89907669999999,
      "lng": -73.86836970000002
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "11206",
      "country": "United States",
      "geo_input": "Brooklyn,NY,11206,United States",
      "lat": 40.7047738,
      "lng": -73.9418603
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "11215",
      "country": "United States",
      "geo_input": "Brooklyn,NY,11215,United States",
      "lat": 40.6681669,
      "lng": -73.9800645
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "11217",
      "country": "United States",
      "geo_input": "Brooklyn,NY,11217,United States",
      "lat": 40.6815619,
      "lng": -73.9785952
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "11217",
      "country": "United States",
      "geo_input": "Brooklyn,NY,11217,United States",
      "lat": 40.6815619,
      "lng": -73.9785952
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "11225",
      "country": "United States",
      "geo_input": "Brooklyn,NY,11225,United States",
      "lat": 40.6648278,
      "lng": -73.9565551
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "11225",
      "country": "United States",
      "geo_input": "Brooklyn,NY,11225,United States",
      "lat": 40.6648278,
      "lng": -73.9565551
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "11226",
      "country": "United States",
      "geo_input": "Brooklyn,NY,11226,United States",
      "lat": 40.6470923,
      "lng": -73.9536163
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "11238",
      "country": "United States",
      "geo_input": "Brooklyn,NY,11238,United States",
      "lat": 40.6805029,
      "lng": -73.96243270000001
    },
    {
      "city": "Brooklyn",
      "state": "NY",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Brooklyn,NY,,United States",
      "lat": 40.6781784,
      "lng": -73.9441579
    },
    {
      "city": "Brookyln",
      "state": "NY",
      "zipcode": "11226",
      "country": "United States",
      "geo_input": "Brookyln,NY,11226,United States",
      "lat": 40.6470923,
      "lng": -73.9536163
    },
    {
      "city": "Buffalo",
      "state": "NY",
      "zipcode": "14212",
      "country": "United States",
      "geo_input": "Buffalo,NY,14212,United States",
      "lat": 42.8954613,
      "lng": -78.8241068
    },
    {
      "city": "Buffalo",
      "state": "NY",
      "zipcode": "14213",
      "country": "United States",
      "geo_input": "Buffalo,NY,14213,United States",
      "lat": 42.9165666,
      "lng": -78.8920444
    },
    {
      "city": "Buffalo",
      "state": "NY",
      "zipcode": "14225",
      "country": "United States",
      "geo_input": "Buffalo,NY,14225,United States",
      "lat": 42.9202891,
      "lng": -78.7589558
    },
    {
      "city": "Farmingdale",
      "state": "NY",
      "zipcode": "11735",
      "country": "United States",
      "geo_input": "Farmingdale,NY,11735,United States",
      "lat": 40.7325997,
      "lng": -73.4454009
    },
    {
      "city": "Lake Grove",
      "state": "NY",
      "zipcode": "11755",
      "country": "United States",
      "geo_input": "Lake Grove,NY,11755,United States",
      "lat": 40.8602892,
      "lng": -73.11725729999999
    },
    {
      "city": "Maspeth",
      "state": "NY",
      "zipcode": "11378",
      "country": "United States",
      "geo_input": "Maspeth,NY,11378,United States",
      "lat": 40.7224092,
      "lng": -73.9095279
    },
    {
      "city": "New York",
      "state": "NY",
      "zipcode": "10010",
      "country": "United States",
      "geo_input": "New York,NY,10010,United States",
      "lat": 40.7388319,
      "lng": -73.98153370000001
    },
    {
      "city": "New York",
      "state": "NY",
      "zipcode": "10023",
      "country": "United States",
      "geo_input": "New York,NY,10023,United States",
      "lat": 40.7769059,
      "lng": -73.9800645
    },
    {
      "city": "New York",
      "state": "NY",
      "zipcode": "10025",
      "country": "United States",
      "geo_input": "New York,NY,10025,United States",
      "lat": 40.7999209,
      "lng": -73.96831019999999
    },
    {
      "city": "New York",
      "state": "NY",
      "zipcode": "10034",
      "country": "United States",
      "geo_input": "New York,NY,10034,United States",
      "lat": 40.8721452,
      "lng": -73.92128579999999
    },
    {
      "city": "New York",
      "state": "NY",
      "zipcode": "10040",
      "country": "United States",
      "geo_input": "New York,NY,10040,United States",
      "lat": 40.8639624,
      "lng": -73.93304289999999
    },
    {
      "city": "New York",
      "state": "NY",
      "zipcode": "10473",
      "country": "United States",
      "geo_input": "New York,NY,10473,United States",
      "lat": 40.811547,
      "lng": -73.859549
    },
    {
      "city": "New York",
      "state": "NY",
      "zipcode": "",
      "country": "United States",
      "geo_input": "New York,NY,,United States",
      "lat": 40.7127753,
      "lng": -74.0059728
    },
    {
      "city": "New York City",
      "state": "NY",
      "zipcode": "11104",
      "country": "United States",
      "geo_input": "New York City,NY,11104,United States",
      "lat": 40.7448741,
      "lng": -73.91981609999999
    },
    {
      "city": "Oakland Gardens",
      "state": "NY",
      "zipcode": "11364",
      "country": "United States",
      "geo_input": "Oakland Gardens,NY,11364,United States",
      "lat": 40.7408584,
      "lng": -73.758241
    },
    {
      "city": "Ossining",
      "state": "NY",
      "zipcode": "10562",
      "country": "United States",
      "geo_input": "Ossining,NY,10562,United States",
      "lat": 41.1628731,
      "lng": -73.8615246
    },
    {
      "city": "Queens",
      "state": "NY",
      "zipcode": "11356",
      "country": "United States",
      "geo_input": "Queens,NY,11356,United States",
      "lat": 40.7901266,
      "lng": -73.8477874
    },
    {
      "city": "Queens",
      "state": "NY",
      "zipcode": "11374",
      "country": "United States",
      "geo_input": "Queens,NY,11374,United States",
      "lat": 40.72557219999999,
      "lng": -73.8624893
    },
    {
      "city": "South Glens Falls",
      "state": "NY",
      "zipcode": "",
      "country": "United States",
      "geo_input": "South Glens Falls,NY,,United States",
      "lat": 43.2992389,
      "lng": -73.63511679999999
    },
    {
      "city": "Staten Island",
      "state": "NY",
      "zipcode": "10301-2201",
      "country": "United States",
      "geo_input": "Staten Island,NY,10301-2201,United States",
      "lat": 40.6274394,
      "lng": -74.0946311
    },
    {
      "city": "Syracuse",
      "state": "NY",
      "zipcode": "13210",
      "country": "United States",
      "geo_input": "Syracuse,NY,13210,United States",
      "lat": 43.0347064,
      "lng": -76.1261969
    },
    {
      "city": "Utica",
      "state": "NY",
      "zipcode": "13502",
      "country": "United States",
      "geo_input": "Utica,NY,13502,United States",
      "lat": 43.100903,
      "lng": -75.232664
    },
    {
      "city": "Bowling Green",
      "state": "OH",
      "zipcode": "43402",
      "country": "United States",
      "geo_input": "Bowling Green,OH,43402,United States",
      "lat": 41.3747744,
      "lng": -83.6513229
    },
    {
      "city": "CANTON",
      "state": "OH",
      "zipcode": "44708",
      "country": "United States",
      "geo_input": "CANTON,OH,44708,United States",
      "lat": 40.8122437,
      "lng": -81.4388858
    },
    {
      "city": "cincinnati",
      "state": "OH",
      "zipcode": "45242",
      "country": "United States",
      "geo_input": "cincinnati,OH,45242,United States",
      "lat": 39.2364358,
      "lng": -84.3647199
    },
    {
      "city": "Cincinnati",
      "state": "OH",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Cincinnati,OH,,United States",
      "lat": 39.1031182,
      "lng": -84.5120196
    },
    {
      "city": "Cleveland",
      "state": "OH",
      "zipcode": "44102",
      "country": "United States",
      "geo_input": "Cleveland,OH,44102,United States",
      "lat": 41.4789363,
      "lng": -81.7404134
    },
    {
      "city": "Cleveland",
      "state": "OH",
      "zipcode": "44120",
      "country": "United States",
      "geo_input": "Cleveland,OH,44120,United States",
      "lat": 41.4769163,
      "lng": -81.57609450000001
    },
    {
      "city": "Columbus",
      "state": "OH",
      "zipcode": "43202",
      "country": "United States",
      "geo_input": "Columbus,OH,43202,United States",
      "lat": 40.0215545,
      "lng": -83.0092803
    },
    {
      "city": "Columbus",
      "state": "OH",
      "zipcode": "43205",
      "country": "United States",
      "geo_input": "Columbus,OH,43205,United States",
      "lat": 39.9576567,
      "lng": -82.9662859
    },
    {
      "city": "Columbus",
      "state": "OH",
      "zipcode": "43224",
      "country": "United States",
      "geo_input": "Columbus,OH,43224,United States",
      "lat": 40.0441439,
      "lng": -82.9609096
    },
    {
      "city": "Powell",
      "state": "OH",
      "zipcode": "43065",
      "country": "United States",
      "geo_input": "Powell,OH,43065,United States",
      "lat": 40.1578402,
      "lng": -83.07518689999999
    },
    {
      "city": "Choctaw",
      "state": "OK",
      "zipcode": "73020",
      "country": "United States",
      "geo_input": "Choctaw,OK,73020,United States",
      "lat": 35.4975625,
      "lng": -97.2689212
    },
    {
      "city": "Beaverton",
      "state": "OR",
      "zipcode": "97003",
      "country": "United States",
      "geo_input": "Beaverton,OR,97003,United States",
      "lat": 45.5096691,
      "lng": -122.8799125
    },
    {
      "city": "Eugene",
      "state": "OR",
      "zipcode": "97402",
      "country": "United States",
      "geo_input": "Eugene,OR,97402,United States",
      "lat": 44.0431493,
      "lng": -123.2259181
    },
    {
      "city": "Eugene",
      "state": "OR",
      "zipcode": "97405",
      "country": "United States",
      "geo_input": "Eugene,OR,97405,United States",
      "lat": 44.0520691,
      "lng": -123.0867536
    },
    {
      "city": "McMinnville",
      "state": "OR",
      "zipcode": "97128",
      "country": "United States",
      "geo_input": "McMinnville,OR,97128,United States",
      "lat": 45.21011619999999,
      "lng": -123.1987163
    },
    {
      "city": "Oregon City",
      "state": "OR",
      "zipcode": "97045",
      "country": "United States",
      "geo_input": "Oregon City,OR,97045,United States",
      "lat": 45.3364465,
      "lng": -122.6050422
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "97206",
      "country": "United States",
      "geo_input": "Portland,OR,97206,United States",
      "lat": 45.48563720000001,
      "lng": -122.5946255
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "97206",
      "country": "United States",
      "geo_input": "Portland,OR,97206,United States",
      "lat": 45.48563720000001,
      "lng": -122.5946255
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "97211",
      "country": "United States",
      "geo_input": "Portland,OR,97211,United States",
      "lat": 45.5767359,
      "lng": -122.6386723
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "97213",
      "country": "United States",
      "geo_input": "Portland,OR,97213,United States",
      "lat": 45.5352835,
      "lng": -122.6037536
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "97225",
      "country": "United States",
      "geo_input": "Portland,OR,97225,United States",
      "lat": 45.5064511,
      "lng": -122.7756216
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "97239",
      "country": "United States",
      "geo_input": "Portland,OR,97239,United States",
      "lat": 45.4874111,
      "lng": -122.6875541
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "97267",
      "country": "United States",
      "geo_input": "Portland,OR,97267,United States",
      "lat": 45.4105073,
      "lng": -122.6161592
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Portland,OR,,United States",
      "lat": 45.5051064,
      "lng": -122.6750261
    },
    {
      "city": "Portland",
      "state": "OR",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Portland,OR,,United States",
      "lat": 45.5051064,
      "lng": -122.6750261
    },
    {
      "city": "Tualatin",
      "state": "OR",
      "zipcode": "97062",
      "country": "United States",
      "geo_input": "Tualatin,OR,97062,United States",
      "lat": 45.3611308,
      "lng": -122.7700372
    },
    {
      "city": "Emmaus",
      "state": "PA",
      "zipcode": "18049",
      "country": "United States",
      "geo_input": "Emmaus,PA,18049,United States",
      "lat": 40.5395421,
      "lng": -75.4968502
    },
    {
      "city": "Glenside",
      "state": "PA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Glenside,PA,,United States",
      "lat": 40.0999077,
      "lng": -75.1527928
    },
    {
      "city": "Hatfield",
      "state": "PA",
      "zipcode": "19440",
      "country": "United States",
      "geo_input": "Hatfield,PA,19440,United States",
      "lat": 40.27982739999999,
      "lng": -75.2993417
    },
    {
      "city": "Lancaster",
      "state": "PA",
      "zipcode": "17603",
      "country": "United States",
      "geo_input": "Lancaster,PA,17603,United States",
      "lat": 40.0144597,
      "lng": -76.3289941
    },
    {
      "city": "Lancaster",
      "state": "PA",
      "zipcode": "17603",
      "country": "United States",
      "geo_input": "Lancaster,PA,17603,United States",
      "lat": 40.0144597,
      "lng": -76.3289941
    },
    {
      "city": "Meadville",
      "state": "PA",
      "zipcode": "16335",
      "country": "United States",
      "geo_input": "Meadville,PA,16335,United States",
      "lat": 41.6414438,
      "lng": -80.15144839999999
    },
    {
      "city": "Mechanicsburg",
      "state": "PA",
      "zipcode": "17055",
      "country": "United States",
      "geo_input": "Mechanicsburg,PA,17055,United States",
      "lat": 40.2132692,
      "lng": -77.0080309
    },
    {
      "city": "Morrisville",
      "state": "PA",
      "zipcode": "19067",
      "country": "United States",
      "geo_input": "Morrisville,PA,19067,United States",
      "lat": 40.2086471,
      "lng": -74.77461819999999
    },
    {
      "city": "North Wales",
      "state": "PA",
      "zipcode": "19454",
      "country": "United States",
      "geo_input": "North Wales,PA,19454,United States",
      "lat": 40.2109404,
      "lng": -75.2782317
    },
    {
      "city": "Philadelphia",
      "state": "PA",
      "zipcode": "19104",
      "country": "United States",
      "geo_input": "Philadelphia,PA,19104,United States",
      "lat": 39.9583587,
      "lng": -75.1953934
    },
    {
      "city": "Philadelphia",
      "state": "PA",
      "zipcode": "19118",
      "country": "United States",
      "geo_input": "Philadelphia,PA,19118,United States",
      "lat": 40.0703334,
      "lng": -75.2070644
    },
    {
      "city": "Philadelphia",
      "state": "PA",
      "zipcode": "19131",
      "country": "United States",
      "geo_input": "Philadelphia,PA,19131,United States",
      "lat": 39.9915379,
      "lng": -75.21873459999999
    },
    {
      "city": "Philadelphia",
      "state": "PA",
      "zipcode": "19143",
      "country": "United States",
      "geo_input": "Philadelphia,PA,19143,United States",
      "lat": 39.9412882,
      "lng": -75.21873459999999
    },
    {
      "city": "Philadelphia",
      "state": "PA",
      "zipcode": "19144",
      "country": "United States",
      "geo_input": "Philadelphia,PA,19144,United States",
      "lat": 40.0358382,
      "lng": -75.174734
    },
    {
      "city": "Philadelphia",
      "state": "PA",
      "zipcode": "19145",
      "country": "United States",
      "geo_input": "Philadelphia,PA,19145,United States",
      "lat": 39.908085,
      "lng": -75.1953934
    },
    {
      "city": "Philadelphia",
      "state": "PA",
      "zipcode": "19146",
      "country": "United States",
      "geo_input": "Philadelphia,PA,19146,United States",
      "lat": 39.9396284,
      "lng": -75.18663959999999
    },
    {
      "city": "Pittsburgh",
      "state": "PA",
      "zipcode": "15108",
      "country": "United States",
      "geo_input": "Pittsburgh,PA,15108,United States",
      "lat": 40.491695,
      "lng": -80.1986649
    },
    {
      "city": "Pittsburgh",
      "state": "PA",
      "zipcode": "15146",
      "country": "United States",
      "geo_input": "Pittsburgh,PA,15146,United States",
      "lat": 40.4324714,
      "lng": -79.7512033
    },
    {
      "city": "Pittsburgh",
      "state": "PA",
      "zipcode": "15217",
      "country": "United States",
      "geo_input": "Pittsburgh,PA,15217,United States",
      "lat": 40.4327086,
      "lng": -79.9248669
    },
    {
      "city": "Pittsburgh",
      "state": "PA",
      "zipcode": "15232",
      "country": "United States",
      "geo_input": "Pittsburgh,PA,15232,United States",
      "lat": 40.451096,
      "lng": -79.9332613
    },
    {
      "city": "Red Lion",
      "state": "PA",
      "zipcode": "17356",
      "country": "United States",
      "geo_input": "Red Lion,PA,17356,United States",
      "lat": 39.9009334,
      "lng": -76.6058001
    },
    {
      "city": "York",
      "state": "PA",
      "zipcode": "17404",
      "country": "United States",
      "geo_input": "York,PA,17404,United States",
      "lat": 39.9625984,
      "lng": -76.727745
    },
    {
      "city": "Providence",
      "state": "RI",
      "zipcode": "02906",
      "country": "United States",
      "geo_input": "Providence,RI,02906,United States",
      "lat": 41.8396817,
      "lng": -71.38837509999999
    },
    {
      "city": "Providence",
      "state": "RI",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Providence,RI,,United States",
      "lat": 41.8239891,
      "lng": -71.4128343
    },
    {
      "city": "Warwick",
      "state": "RI",
      "zipcode": "02888",
      "country": "United States",
      "geo_input": "Warwick,RI,02888,United States",
      "lat": 41.7475142,
      "lng": -71.412125
    },
    {
      "city": "Batesburg",
      "state": "SC",
      "zipcode": "29006",
      "country": "United States",
      "geo_input": "Batesburg,SC,29006,United States",
      "lat": 33.9101425,
      "lng": -81.5373261
    },
    {
      "city": "Greenville",
      "state": "SC",
      "zipcode": "29609",
      "country": "United States",
      "geo_input": "Greenville,SC,29609,United States",
      "lat": 34.9208336,
      "lng": -82.37773349999999
    },
    {
      "city": "Greenville",
      "state": "SC",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Greenville,SC,,United States",
      "lat": 34.85261759999999,
      "lng": -82.3940104
    },
    {
      "city": "Memphis",
      "state": "TN",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Memphis,TN,,United States",
      "lat": 35.1495343,
      "lng": -90.0489801
    },
    {
      "city": "Murfreesboro",
      "state": "TN",
      "zipcode": "37130",
      "country": "United States",
      "geo_input": "Murfreesboro,TN,37130,United States",
      "lat": 35.8807375,
      "lng": -86.317392
    },
    {
      "city": "Nashville",
      "state": "TN",
      "zipcode": "37203",
      "country": "United States",
      "geo_input": "Nashville,TN,37203,United States",
      "lat": 36.1523805,
      "lng": -86.7893889
    },
    {
      "city": "Austin",
      "state": "TX",
      "zipcode": "78723",
      "country": "United States",
      "geo_input": "Austin,TX,78723,United States",
      "lat": 30.3081307,
      "lng": -97.68194299999999
    },
    {
      "city": "austin",
      "state": "TX",
      "zipcode": "78728",
      "country": "United States",
      "geo_input": "austin,TX,78728,United States",
      "lat": 30.4570672,
      "lng": -97.68194299999999
    },
    {
      "city": "Austin",
      "state": "TX",
      "zipcode": "78741",
      "country": "United States",
      "geo_input": "Austin,TX,78741,United States",
      "lat": 30.2259488,
      "lng": -97.7145152
    },
    {
      "city": "Austin",
      "state": "TX",
      "zipcode": "78744",
      "country": "United States",
      "geo_input": "Austin,TX,78744,United States",
      "lat": 30.196311,
      "lng": -97.730807
    },
    {
      "city": "Austin",
      "state": "TX",
      "zipcode": "78748",
      "country": "United States",
      "geo_input": "Austin,TX,78748,United States",
      "lat": 30.168207,
      "lng": -97.8177601
    },
    {
      "city": "Austin",
      "state": "TX",
      "zipcode": "78748",
      "country": "United States",
      "geo_input": "Austin,TX,78748,United States",
      "lat": 30.168207,
      "lng": -97.8177601
    },
    {
      "city": "Austin",
      "state": "TX",
      "zipcode": "78758",
      "country": "United States",
      "geo_input": "Austin,TX,78758,United States",
      "lat": 30.3870686,
      "lng": -97.70365609999999
    },
    {
      "city": "Austin",
      "state": "TX",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Austin,TX,,United States",
      "lat": 30.267153,
      "lng": -97.7430608
    },
    {
      "city": "Carrollton",
      "state": "TX",
      "zipcode": "75007",
      "country": "United States",
      "geo_input": "Carrollton,TX,75007,United States",
      "lat": 33.0126814,
      "lng": -96.8887202
    },
    {
      "city": "Dallas",
      "state": "TX",
      "zipcode": "75206",
      "country": "United States",
      "geo_input": "Dallas,TX,75206,United States",
      "lat": 32.8225166,
      "lng": -96.77616859999999
    },
    {
      "city": "Fort Worth",
      "state": "TX",
      "zipcode": "76107",
      "country": "United States",
      "geo_input": "Fort Worth,TX,76107,United States",
      "lat": 32.737615,
      "lng": -97.38407289999999
    },
    {
      "city": "Greenville",
      "state": "TX",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Greenville,TX,,United States",
      "lat": 33.1384488,
      "lng": -96.11080659999999
    },
    {
      "city": "Houston",
      "state": "TX",
      "zipcode": "77018",
      "country": "United States",
      "geo_input": "Houston,TX,77018,United States",
      "lat": 29.8282298,
      "lng": -95.42537569999999
    },
    {
      "city": "Houston",
      "state": "TX",
      "zipcode": "77043",
      "country": "United States",
      "geo_input": "Houston,TX,77043,United States",
      "lat": 29.8054835,
      "lng": -95.5564777
    },
    {
      "city": "Houston",
      "state": "TX",
      "zipcode": "77054",
      "country": "United States",
      "geo_input": "Houston,TX,77054,United States",
      "lat": 29.6849782,
      "lng": -95.39919069999999
    },
    {
      "city": "San Antonio",
      "state": "TX",
      "zipcode": "78233-6337",
      "country": "United States",
      "geo_input": "San Antonio,TX,78233-6337,United States",
      "lat": 29.4241219,
      "lng": -98.49362819999999
    },
    {
      "city": "San Antonio",
      "state": "TX",
      "zipcode": "78238",
      "country": "United States",
      "geo_input": "San Antonio,TX,78238,United States",
      "lat": 29.4687013,
      "lng": -98.6215649
    },
    {
      "city": "Logan",
      "state": "UT",
      "zipcode": "84341",
      "country": "United States",
      "geo_input": "Logan,UT,84341,United States",
      "lat": 41.7773889,
      "lng": -111.7972384
    },
    {
      "city": "Salt Lake City",
      "state": "UT",
      "zipcode": "84105",
      "country": "United States",
      "geo_input": "Salt Lake City,UT,84105,United States",
      "lat": 40.7345053,
      "lng": -111.8628205
    },
    {
      "city": "Arlington",
      "state": "VA",
      "zipcode": "22201",
      "country": "United States",
      "geo_input": "Arlington,VA,22201,United States",
      "lat": 38.8845126,
      "lng": -77.0938583
    },
    {
      "city": "Arlington",
      "state": "VA",
      "zipcode": "22201",
      "country": "United States",
      "geo_input": "Arlington,VA,22201,United States",
      "lat": 38.8845126,
      "lng": -77.0938583
    },
    {
      "city": "Arlington",
      "state": "VA",
      "zipcode": "22203",
      "country": "United States",
      "geo_input": "Arlington,VA,22203,United States",
      "lat": 38.8716687,
      "lng": -77.11687529999999
    },
    {
      "city": "Arlington",
      "state": "VA",
      "zipcode": "22204",
      "country": "United States",
      "geo_input": "Arlington,VA,22204,United States",
      "lat": 38.8565647,
      "lng": -77.0967357
    },
    {
      "city": "Charlottesville",
      "state": "VA",
      "zipcode": "22902",
      "country": "United States",
      "geo_input": "Charlottesville,VA,22902,United States",
      "lat": 38.0293059,
      "lng": -78.47667810000002
    },
    {
      "city": "Charlottesville",
      "state": "VA",
      "zipcode": "22903",
      "country": "United States",
      "geo_input": "Charlottesville,VA,22903,United States",
      "lat": 38.0293059,
      "lng": -78.47667810000002
    },
    {
      "city": "Herndon",
      "state": "VA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Herndon,VA,,United States",
      "lat": 38.9695545,
      "lng": -77.3860976
    },
    {
      "city": "Norfolk",
      "state": "VA",
      "zipcode": "23504",
      "country": "United States",
      "geo_input": "Norfolk,VA,23504,United States",
      "lat": 36.8537392,
      "lng": -76.2652909
    },
    {
      "city": "Reston",
      "state": "VA",
      "zipcode": "20192",
      "country": "United States",
      "geo_input": "Reston,VA,20192,United States",
      "lat": 38.9501674,
      "lng": -77.3672157
    },
    {
      "city": "Richmond",
      "state": "VA",
      "zipcode": "23221",
      "country": "United States",
      "geo_input": "Richmond,VA,23221,United States",
      "lat": 37.5488885,
      "lng": -77.4874049
    },
    {
      "city": "Rochester",
      "state": "VT",
      "zipcode": "05767",
      "country": "United States",
      "geo_input": "Rochester,VT,05767,United States",
      "lat": 43.862051,
      "lng": -72.8277885
    },
    {
      "city": "South Burlington",
      "state": "VT",
      "zipcode": "05403",
      "country": "United States",
      "geo_input": "South Burlington,VT,05403,United States",
      "lat": 44.4493489,
      "lng": -73.1607806
    },
    {
      "city": "Bellingham",
      "state": "WA",
      "zipcode": "98225",
      "country": "United States",
      "geo_input": "Bellingham,WA,98225,United States",
      "lat": 48.7562157,
      "lng": -122.4894588
    },
    {
      "city": "Camas",
      "state": "WA",
      "zipcode": "98607",
      "country": "United States",
      "geo_input": "Camas,WA,98607,United States",
      "lat": 45.58671280000001,
      "lng": -122.402442
    },
    {
      "city": "Centralia",
      "state": "WA",
      "zipcode": "98531",
      "country": "United States",
      "geo_input": "Centralia,WA,98531,United States",
      "lat": 46.7417817,
      "lng": -122.9490589
    },
    {
      "city": "Deer Park",
      "state": "WA",
      "zipcode": "99006",
      "country": "United States",
      "geo_input": "Deer Park,WA,99006,United States",
      "lat": 47.9543375,
      "lng": -117.476891
    },
    {
      "city": "Olympia",
      "state": "WA",
      "zipcode": "98506",
      "country": "United States",
      "geo_input": "Olympia,WA,98506,United States",
      "lat": 47.1035034,
      "lng": -122.8709764
    },
    {
      "city": "Redmond",
      "state": "WA",
      "zipcode": "98052",
      "country": "United States",
      "geo_input": "Redmond,WA,98052,United States",
      "lat": 47.6701193,
      "lng": -122.1182369
    },
    {
      "city": "Redmond",
      "state": "WA",
      "zipcode": "98052",
      "country": "United States",
      "geo_input": "Redmond,WA,98052,United States",
      "lat": 47.6701193,
      "lng": -122.1182369
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98103",
      "country": "United States",
      "geo_input": "Seattle,WA,98103,United States",
      "lat": 47.6600087,
      "lng": -122.3425575
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98106",
      "country": "United States",
      "geo_input": "Seattle,WA,98106,United States",
      "lat": 47.5476069,
      "lng": -122.3514653
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98106",
      "country": "United States",
      "geo_input": "Seattle,WA,98106,United States",
      "lat": 47.5476069,
      "lng": -122.3514653
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98109",
      "country": "United States",
      "geo_input": "Seattle,WA,98109,United States",
      "lat": 47.6288591,
      "lng": -122.3456919
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98118",
      "country": "United States",
      "geo_input": "Seattle,WA,98118,United States",
      "lat": 47.5412021,
      "lng": -122.2675626
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98119",
      "country": "United States",
      "geo_input": "Seattle,WA,98119,United States",
      "lat": 47.6384586,
      "lng": -122.3674079
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98119",
      "country": "United States",
      "geo_input": "Seattle,WA,98119,United States",
      "lat": 47.6384586,
      "lng": -122.3674079
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98119",
      "country": "United States",
      "geo_input": "Seattle,WA,98119,United States",
      "lat": 47.6384586,
      "lng": -122.3674079
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98133",
      "country": "United States",
      "geo_input": "Seattle,WA,98133,United States",
      "lat": 47.7393027,
      "lng": -122.3435335
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98133",
      "country": "United States",
      "geo_input": "Seattle,WA,98133,United States",
      "lat": 47.7393027,
      "lng": -122.3435335
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "98155",
      "country": "United States",
      "geo_input": "Seattle,WA,98155,United States",
      "lat": 47.7612471,
      "lng": -122.3000183
    },
    {
      "city": "Seattle",
      "state": "WA",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Seattle,WA,,United States",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    {
      "city": "Snoqualmie",
      "state": "WA",
      "zipcode": "98065",
      "country": "United States",
      "geo_input": "Snoqualmie,WA,98065,United States",
      "lat": 47.5287132,
      "lng": -121.8253906
    },
    {
      "city": "Spokane",
      "state": "WA",
      "zipcode": "99208",
      "country": "United States",
      "geo_input": "Spokane,WA,99208,United States",
      "lat": 47.7872368,
      "lng": -117.4644801
    },
    {
      "city": "Spokane",
      "state": "WA",
      "zipcode": "99223",
      "country": "United States",
      "geo_input": "Spokane,WA,99223,United States",
      "lat": 47.5888029,
      "lng": -117.3272224
    },
    {
      "city": "Tacoma",
      "state": "WA",
      "zipcode": "98408",
      "country": "United States",
      "geo_input": "Tacoma,WA,98408,United States",
      "lat": 47.1907035,
      "lng": -122.4448476
    },
    {
      "city": "Vancouver",
      "state": "WA",
      "zipcode": "98660",
      "country": "United States",
      "geo_input": "Vancouver,WA,98660,United States",
      "lat": 45.6837914,
      "lng": -122.7488096
    },
    {
      "city": "Appleton",
      "state": "WI",
      "zipcode": "54952",
      "country": "United States",
      "geo_input": "Appleton,WI,54952,United States",
      "lat": 44.1790349,
      "lng": -88.3433623
    },
    {
      "city": "Beaver Dam",
      "state": "WI",
      "zipcode": "53916",
      "country": "United States",
      "geo_input": "Beaver Dam,WI,53916,United States",
      "lat": 43.4577167,
      "lng": -88.83730229999999
    },
    {
      "city": "Dodgeville",
      "state": "WI",
      "zipcode": "53533",
      "country": "United States",
      "geo_input": "Dodgeville,WI,53533,United States",
      "lat": 42.96027429999999,
      "lng": -90.1301237
    },
    {
      "city": "Madison",
      "state": "WI",
      "zipcode": "53562",
      "country": "United States",
      "geo_input": "Madison,WI,53562,United States",
      "lat": 43.1156039,
      "lng": -89.5308903
    },
    {
      "city": "Madison",
      "state": "WI",
      "zipcode": "53716",
      "country": "United States",
      "geo_input": "Madison,WI,53716,United States",
      "lat": 43.0709333,
      "lng": -89.32743909999999
    },
    {
      "city": "Madison",
      "state": "WI",
      "zipcode": "53726",
      "country": "United States",
      "geo_input": "Madison,WI,53726,United States",
      "lat": 43.06903430000001,
      "lng": -89.4245627
    },
    {
      "city": "Milwaukee",
      "state": "WI",
      "zipcode": "53208",
      "country": "United States",
      "geo_input": "Milwaukee,WI,53208,United States",
      "lat": 43.0499798,
      "lng": -87.962884
    },
    {
      "city": "Milwaukee",
      "state": "WI",
      "zipcode": "53211-3979",
      "country": "United States",
      "geo_input": "Milwaukee,WI,53211-3979,United States",
      "lat": 43.078263,
      "lng": -87.8819686
    },
    {
      "city": "Milwaukee",
      "state": "WI",
      "zipcode": "53212",
      "country": "United States",
      "geo_input": "Milwaukee,WI,53212,United States",
      "lat": 43.0732715,
      "lng": -87.9089623
    },
    {
      "city": "Milwaukee",
      "state": "WI",
      "zipcode": "",
      "country": "United States",
      "geo_input": "Milwaukee,WI,,United States",
      "lat": 43.0389025,
      "lng": -87.9064736
    },
    {
      "city": "Racine",
      "state": "WI",
      "zipcode": "53405",
      "country": "United States",
      "geo_input": "Racine,WI,53405,United States",
      "lat": 42.7333428,
      "lng": -87.8255014
    },
    {
      "city": "River Falls",
      "state": "WI",
      "zipcode": "54022-2003",
      "country": "United State",
      "geo_input": "River Falls,WI,54022-2003,United State",
      "lat": 44.8613563,
      "lng": -92.6238082
    }
  ]
  
  markers.forEach(m => {
    
    const location = {'lat': m.lat, 'lng': m.lng}
    const image = "stakeMarker.png";

    const scoobieMarker = new google.maps.Marker({
      position: location,
      title: m.city,
      map: scoobieMap, 
      icon: image
    });


    const infoContent = document.createElement('div');
    const cityName = document.createElement('div');
    cityName.setAttribute('class', 'city-name');
    cityName.textContent = m.city;
    const stateZip = document.createElement('div');
    if (m.state !== "") {
      const stateName = document.createElement('span');
      stateName.textContent = m.state
      stateZip.appendChild(stateName)
    };
    if (m.zipcode !== "") {
      const zip = document.createElement('span');
      zip.textContent = "  " + m.zipcode
      stateZip.appendChild(zip)
    };
    const country = document.createElement('div');
    country.textContent = m.country

    infoContent.appendChild(cityName)
    infoContent.appendChild(stateZip)
    infoContent.appendChild(country)

    const scoobieInfo = new google.maps.InfoWindow({content: infoContent});

    scoobieMarker.addListener('click', () => {
      scoobieInfo.open(scoobieMap, scoobieMarker)
    })
  })
}



