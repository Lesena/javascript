$scope.getTarifZones = function(val) {
            var result = [];
            var getLocations = function(value) {
                return $http.get('/api/locations', {
                  params: {
                    address: 'Казахстан, Алматы, '+value
                  }
                }).then(function(response){
                    var featureMember = response.data.response.GeoObjectCollection.featureMember;
                    featureMember.map(function(item){
                        return {
                            place: item.GeoObject.name,
                            type: 'Адреса'
                        };
                    });

                    var zones =  _.filter($scope.order.client.places, function (place) {
                        return place.place.address.indexOf(val) >=0;
                    }).map(function (place) {
                        place.place.type = 'Тарифные зоны';
                        return place;
                    }); 
                    result = _.concat(zones, featureMember);

                    console.log('locations ', result);
                });
            };
            getLocations(val);
            return result;
        };
