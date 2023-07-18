const clients = [
  { name: "Fintech" },
  { name: "Splash" },
  { name: "Sofinmore" },
  { name: "Alcaset" },
  { name: "Exotech" },
];

/**
 * generateRandomId
 * @param {number} length
 * @returns
 */
function uid(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  return id;
}

/**
 * Return an integer random number between min & max.
 * If max is "undefined" return a random number between 0 & min.
 * If min & max are "undefined" return a random number between 0 & 1.
 * @param {number} min lower limit
 * @param {number} max upper limit
 * @returns {number} integer random number between min:max or 0: min or 0:1
 */
function rand(min, max) {
  return Math.floor(randf(min, max));
}

/**
 * Generate a floating point random number between min & max.
 * If max is "undefined" return a random number between 0 & min.
 * If min & max are "undefined" return a random number between 0 & 1.
 * @param {number} min lower limit
 * @param {number} max upper limit
 * @returns {number} floating point random number between min:max or 0: min or 0:1
 */
function randf(min, max) {
  if (max == null) {
    max = min || 1;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

/**
 * Pick a random element from an array.
 * @param {Array} items target array
 * @returns {*} picked array item
 */
function randOneFrom(items = []) {
  return items[rand(0, items.length)];
}

/**
 * getFormattedDate
 * returns the date string in the format of YYYY/MM/DD
 * @param {Date} currentDate
 * @returns
 */
function getFormattedDate(currentDate) {
  // const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const dateString = `${year}/${month}/${day}`;

  return dateString;
}

/**
 * generateTimeSeries
 * makes a synthetic timeseries, with a peak followed by a decay
 */
const generateTimeseries = () => {
  const dataset = {
    years: Array.from({ length: 25 }, (_, index) => (2000 + index).toString()),
    technical: Array.from({ length: 25 }, () => Math.floor(Math.random() * 6)),
    service: Array.from({ length: 25 }, () => Math.floor(Math.random() * 6)),
  };

  return dataset;
};

/**
 * generate
 * client feedback fake dataset
 * @returns data[]
 */
const generate = (clients) => {
  return clients.map(({ name }) => {
    return {
      id: uid(10),
      division: "DevOps",

      favourite: randOneFrom([true, false]),
      name: name,
      HQ: randOneFrom(["Rome", "Milan", "Paris", "London"]),
      business: randOneFrom([
        "Data Analytics",
        "Geophysics",
        "Engineering",
        "Data Science",
      ]),
      centers: rand(10, 30),
      projects: rand(50, 100),
      period: ["01/2000", "03/2024"],
      rank: randOneFrom(["Primary", "Contractor"]),

      projects: {
        completed: rand(10, 50),
        ongoing: rand(0, 20),
      },
      feedback: {
        loyalty: rand(0, 20),
        technical: rand(0, 5),
        service: rand(0, 5),
        NPS: rand(-50, 50),
      },
      history: generateTimeseries(),
    };
  });
};

const data = generate(clients);

export default data;
