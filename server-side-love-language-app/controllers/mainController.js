const { Soal, UserResult, LoveLanguageType } = require("../models");

class MainController {
    static async getSoals(req, res, next) {
        try {
            let soals = await Soal.findAll();
            res.status(200).json(soals);
        } catch (error) {
            next(error);
        }
    }

    static async postResult(req, res, next) {
        try {
            const { resultCollection } = req.body; //resultCollection merupakan kumpulan jawaban ([A,E,A,C,D,B .....dst])
            const {id, name} = req.user
            if (!resultCollection) {
                throw {
                    status: 404,
                    message: "Not Found",
                };
            } else {
                let resultA = { total: resultCollection.match(/A/g).length, type: "A" };
                let resultB = { total: resultCollection.match(/B/g).length, type: "B" };
                let resultC = { total: resultCollection.match(/C/g).length, type: "C" };
                let resultD = { total: resultCollection.match(/D/g).length, type: "D" };
                let resultE = { total: resultCollection.match(/E/g).length, type: "E" };
                let result = [resultA, resultB, resultC, resultD, resultE];
                function compare(a, b) {
                    if (a.total < b.total) {
                        return -1;
                    }
                    if (a.total > b.total) {
                        return 1;
                    }
                    return 0;
                }
                console.log(result.sort(compare), "COMPARE");
                let codeTypeId
                switch (result[4].type) {
                    case "A":
                        codeTypeId = 1
                        break;
                    case "B":
                        codeTypeId = 2
                        break;
                    case "C":
                        codeTypeId = 3
                        break;
                    case "D":
                        codeTypeId = 4
                        break;
                    case "E":
                        codeTypeId = 5
                        break;
                    default:
                        break;
                }
                if (result[4].total === result[3].total) {
                    let resultDesc = await UserResult.create({
                        UserId:id,
                        TypeId:codeTypeId
                    })
                    res.status(200).json({ resultDesc });
                    // res.status(200).json({ type1: result[4].type, type2: result[3].type });
                } else if (result[4].total > result[3].total) {
                    let resultDesc = await UserResult.create({
                        UserId:id,
                        TypeId: codeTypeId
                    })
                    res.status(200).json({ resultDesc });
                    // res.status(200).json({ type1: result[4].type, type2: result[3].type });
                } else {
                    res.status(200).json({ result });
                }
            }
        } catch (error) {
            next(error);
        }
    }

    static async getResult(req, res, next) {
        try {
            const {id} = req.user
            const result = await UserResult.findOne({where: {"UserId": id}})
            console.log(result, "INI RESULTS");
            if(!result){
                 console.log("Not Found")
                 res.status(201).json({message: "Not Found Love Language", code: "no"})
                }else{
                    console.log(result, "Found it ");
                    const typeLove = await LoveLanguageType.findOne({where: {id: result.TypeId}})
                    res.status(200).json({typeLove, code: "ok"})
            }
        } catch (error) {console.log(error)}
    }

    static async deleteResult(req, res, next){
        try {
            const {id} = req.user
            
            const successDel = await UserResult.destroy({where: {UserId: id}})
            console.log(successDel, "DELETE");
            res.status(200).json({successDel})
        } catch (error) {
            next(error)
        }
    }

    static async getTypeLoveLanguage (req, res, next){
        try {
            const types = await LoveLanguageType.findAll()
            console.log(types);
            if(!types) throw {status: 404, message: "Data Not Found"}
            res.status(200).json({types})
        } catch (error) {
            // console.log(error);
            next(error)
        }
    }
}

module.exports = MainController;