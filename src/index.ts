import { getArgs, includesFlag, getFlagArgs } from "./query";
import { getAllIconsObject } from "./assets/icons_object";
import { search, toJson } from "./search";
import { putName, putCode, putRef } from "./put";

const FLAG_FIND = "--find";
const FLAG_PUT_NAME = "--put-name";
const FLAG_PUT_CODE = "--put-code";
const FLAG_PUT_REF = "--put-ref";

const main = () => {
  const args = getArgs();
  const list = getAllIconsObject();
  const keys = ["name", "search.terms"];

  if (includesFlag(args, FLAG_FIND)) {
    const query = getFlagArgs(args, FLAG_FIND);
    const searchResult = search(list, keys, query);
    console.log(toJson(searchResult));
    return;
  }

  if (includesFlag(args, FLAG_PUT_NAME)) {
    const query = getFlagArgs(args, FLAG_PUT_NAME);
    const result = putName(query);
    result && console.log(result);
    return;
  }

  if (includesFlag(args, FLAG_PUT_CODE)) {
    const query = getFlagArgs(args, FLAG_PUT_CODE);
    const result = putCode(query);
    result && console.log(result);
    return;
  }

  if (includesFlag(args, FLAG_PUT_REF)) {
    const query = getFlagArgs(args, FLAG_PUT_REF);
    const result = putRef(query);
    result && console.log(result);
    return;
  }

  // no flag
  console.log(toJson(search(list, keys, "")));
};

main();
