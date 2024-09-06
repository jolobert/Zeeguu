import Pluralize from "../text/pluralize";

function timeToHumanReadable(timeInSeconds, precision = "seconds") {
  // Currently supports two precision: "seconds" and "minutes"
  if (timeInSeconds < 60) {
    if (precision === "seconds")
      return timeInSeconds + (timeInSeconds > 1 ? " seconds" : " second");
    else return "< 1 minute";
  } else {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    let string = minutes + Pluralize.minute(minutes);
    if (seconds > 0 && precision === "seconds")
      string += " " + seconds + Pluralize.second(seconds);
    return string;
  }
}

function estimateReadingTime(wordCount) {
  // 238 words per minute is average for a normal reader in English.
  // Let'say a language lerner takes 160 WPM + Wait + Translation Words
  return timeToHumanReadable(Math.ceil(wordCount / 160) * 60, "minutes");
}
export { timeToHumanReadable, estimateReadingTime };
