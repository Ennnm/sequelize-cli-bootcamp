import db from './models/index.mjs';

// create
if (process.argv[2] === 'create' && process.argv[3]) {
  db.Trip.create({
    name: process.argv[3],
  });
  console.log('Trip created');
}

if (process.argv[2] === 'add-attrac' && process.argv[3] && process.argv[4]) {
  db.Trip.findOne({
    where: {
      name: process.argv[3],
    },
  })
    .then((returnedTrip) => db.Attraction.create({
      name: process.argv[4],
      trip_id: returnedTrip.id,
    }))
    .then((returnedAttr) => {
      console.log('success!');
      console.log(returnedAttr.id, 'returned attr ID');
      console.log(returnedAttr.trip_id, 'returned trip ID');
    })
    .catch((err) => {
      console.log(err);
    });
}
if (process.argv[2] === 'trip' && process.argv[3]) {
  db.Trip.findOne({
    where: {
      name: process.argv[3],
    },
  })
    .then((returnedTrip) => {
      console.log('returned trip', returnedTrip);
    }).catch((err) => {
      console.log(err);
    });
}
