// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto';

const secretKey = 'testBase';

function judgeEncryptKeyValid(req: any) {
    const headers = req.headers;
    const body = req.body;
    const nonce = headers['x-base-request-nonce'];
    const timestamp = headers['x-base-request-timestamp'];
    const sig = headers['x-base-signature'];
    if (!sig) {
        console.log('无签名加密')
        return true;
    }
    // 拼接字符串
    const str = timestamp + nonce + secretKey + JSON.stringify(body);
    // 创建SHA-1加密实例
    const sha1 = crypto.createHash('sha1');
    // 更新要加密的数据
    sha1.update(str);
    // 计算加密结果
    const encryptedStr = sha1.digest('hex');
    // 比较加密结果
    return encryptedStr === sig;
}

export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
        // Process a POST request
        const body = req.body;
        console.log('records的请求数据', body);
        const header = req.headers
        console.log('收到请求的header:');
        console.log('  x-base-request-timestamp:', header['x-base-request-timestamp']);
        console.log('  x-base-request-nonce:', header['x-base-request-nonce']);
        console.log('  x-base-signature:', header['x-base-signature']);

        console.log('加密判断结果：', judgeEncryptKeyValid(req));

        // 进行处理，并返回结果
        const result = {

            "nextPageToken": "xxx",
            "hasMore": false,
            "records": [
                {
                    "primaryId": "record_1",
                    "data": {
                        "fid_1": "xxx",
                        "fid_2": 1343,
                        "fid_3": "a",
                        "fid_5": 1697994894000,
                        "fid_8": 1343.343443,
                        "fid_9": 40,
                        "fid_10": 3,
                        "fid_14": {
                            "ids": [
                                "6983855737910886401"
                            ],
                            "idType": "UserLarkID"
                        },
                        "fid_15": {
                            "ids": [
                                "Wz0ob1A0jodZ1axAe1Obo7gvcRd"
                            ],
                            "idType": "DriveFile"
                        },
                        "fid_16": {
                            "ids": [
                                "7251866351663317012",
                                "7271479319895998483"
                            ],
                            "idType": "ChatLarkID"
                        },
                        "fid_17": {
                            "latitude": 39.903179,
                            "longitude": 116.397755
                        }

                    }
                },
                {
                    "primaryId": "record_2",
                    "data": {
                        "fid_1": "yyy",
                        "fid_2": 222.33344,
                        "fid_3": "b",
                        "fid_4": ["b", "c"],
                        "fid_5": 1699999994000,
                        "fid_6": "xxx",
                        "fid_7": true,
                        "fid_8": 1343,
                        "fid_9": 80,
                        "fid_10": 8,
                        "fid_14": {
                            "ids": [
                                "6921583492111269907",
                                "7171043992061083667"
                            ],
                            "idType": "UserLarkID"
                        },
                        "fid_15": {
                            "ids": [
                                "QPlEbvok0o8wTSxBAhGbkz2Ocgd", "NjvCbpB1OoHb6sxSJhKbJ4nHcGl",
                                "SFAEbiE0Jo7wDRxres8bqlTwczh"
                            ],
                            "idType": "DriveFile"
                        }, "fid_16": {
                            "ids": [
                                "7251866351663317012"
                            ],
                            "idType": "ChatLarkID"
                        }
                    }
                },
                {
                    "primaryId": "record_3",
                    "data": {
                        "fid_1": "yyy",
                        "fid_2": 222.33344,
                        "fid_3": "b",
                        "fid_5": 1699999994000,
                        "fid_8": 1343,
                        "fid_9": 80,
                        "fid_10": 8,
                        "fid_14": {
                            "ids": [
                                "6921583492111269907",
                                "7171043992061083667"
                            ],
                            "idType": "UserLarkID"
                        },
                        "fid_15": {
                            "ids": [
                                "QPlEbvok0o8wTSxBAhGbkz2Ocgd", "NjvCbpB1OoHb6sxSJhKbJ4nHcGl",
                                "SFAEbiE0Jo7wDRxres8bqlTwczh"
                            ],
                            "idType": "DriveFile"
                        }, "fid_16": {
                            "ids": [
                                "7251866351663317012"
                            ],
                            "idType": "ChatLarkID"
                        }
                    }
                }
            ]
        };
        res.status(200).json({
            code: 0,
            msg: '',
            data: result
        });

    } else {
        // Handle any other HTTP method
    }
}