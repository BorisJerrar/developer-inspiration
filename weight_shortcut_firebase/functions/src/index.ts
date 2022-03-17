import functions = require("firebase-functions");
import admin = require("firebase-admin");
import {ChartJSNodeCanvas} from "chartjs-node-canvas";
/* eslint-disable-next-line max-len */
import {BubbleDataPoint, ChartConfiguration, ChartTypeRegistry, ScatterDataPoint} from "chart.js";

const width = 2000;
const height = 1000;
const backgroundColour = "white";
/* eslint-disable-next-line max-len */
const chartJSNodeCanvas = new ChartJSNodeCanvas({width, height, backgroundColour});


admin.initializeApp();
const db = admin.firestore();

interface Weight {
  weight: number;
  date: {seconds: number, nanoseconds: number};
}

/**
 * @function
 * @param {number} num
 * @return {string}
 */
function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}

/**
 * @function
 * @param {number} date
 * @return {string}
 */
function formatDate(date: number): string {
  const final = new Date(date *1000);
  return [
    padTo2Digits(final.getDate()),
    padTo2Digits(final.getMonth() + 1),
    final.getFullYear(),
  ].join("/");
}

/**
 * @function
 * @param {functions.https.Request} request
 * @param {functions.Response<any>} response
 * @returns {void}
 */
export const addWeight = functions
    .region("yourRegion")
    .https.onRequest(async (request, response) => {
      const batch = db.batch();
      const collection = db.collection("weight");
      /* eslint-disable-next-line max-len */
      const weightDocumentData = {
        weight: request.body.weight,
        date: admin.firestore.Timestamp.fromDate(new Date()),
      };
      batch.set(collection.doc(), weightDocumentData, {});
      batch.commit();
      response.json({success: true});
    });
/**
 * @function
 * @param {functions.https.Request} request
 * @param {functions.Response<any>} response
 * @returns {void}
 */
export const getWeight = functions
    .region("yourRegion")
    .https.onRequest(async (request, response) => {
      const collection = db.collection("weight");
      const eachWeight = await collection.orderBy("date", "asc").get();
      const weight: Weight[] = [];
      eachWeight.forEach((doc) => {
        weight.push(doc.data() as Weight);
      });
      if (eachWeight.size > 0) {
        const ChartOptions :
      /* eslint-disable-next-line max-len */
     ChartConfiguration<keyof ChartTypeRegistry, (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown> =
     {
       type: "line",
       data: {
         labels: weight.map((each) => formatDate(each.date.seconds)),
         datasets: [
           {
             type: "line",
             data: weight.map((each) => each.weight),
             backgroundColor: "rgba(189,66,119,0)",
             borderColor: "#ffbe0b",
             pointBackgroundColor: "#8338EC",
             pointBorderColor: "#8338ec",
             label: "Weight"},

         ],
       },
       options: {

         layout: {padding: {top: 12, left: 12, bottom: 12}},
         elements: {
           arc: {
           },
           point: {borderWidth: 3},
           line: {tension: 0, borderWidth: 5,
           },
         },
       },
     };


        const dataUrl = await chartJSNodeCanvas.renderToDataURL(ChartOptions);
        response.json({image: dataUrl, weight});
      } else {
        response.json({error: "no data yet"});
      }
    });
