import logger from "pino";
import PinoPretty from "pino-pretty"

const log = logger(PinoPretty());

export default log;
