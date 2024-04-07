import process from "process"

process.report.reportOnfatalError = true
process.report.reportOnSignal = true
process.report.reportUncaughtException = true
process.report.filename = "report.json"


function sampleReport(){
    throw new Error("UPS")
}

sampleReport()