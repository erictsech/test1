// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log('table_meta的请求数据', req.body)

        const data = {

            "tableName": "测试连接器插件",
            "fields": [
                {
                    "fieldId": "fid_1",
                    "fieldName": "id1",
                    "fieldType": 1,
                    "isPrimary": true,
                    "description": ""
                },
                {
                    "fieldId": "fid_2",
                    "fieldName": "数字",
                    "fieldType": 2,
                    "isPrimary": false,
                    "property": {
                        "formatter": "#,##0.00"
                    }
                },
                {
                    "fieldId": "fid_3",
                    "fieldName": "单选",
                    "fieldType": 3,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {}
                },
                {
                    "fieldId": "fid_4",
                    "fieldName": "多选",
                    "fieldType": 4,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {}
                },
                {
                    "fieldId": "fid_5",
                    "fieldName": "日期",
                    "fieldType": 5,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {
                        "formatter": "dd/MM/yyyy"
                    }
                },
                {
                    "fieldId": "fid_6",
                    "fieldName": "条形码",
                    "fieldType": 6,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {}
                },
                {
                    "fieldId": "fid_7",
                    "fieldName": "复选框",
                    "fieldType": 7,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {}
                },
                {
                    "fieldId": "fid_8",
                    "fieldName": "货币",
                    "fieldType": 8,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {
                        "formatter": "#,##0.000",
                        "currencyCode": "USD"
                    }
                },
                {
                    "fieldId": "fid_11",
                    "fieldName": "电话",
                    "fieldType": 9,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {}
                },
                {
                    "fieldId": "fid_12",
                    "fieldName": "url",
                    "fieldType": 10,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {}
                },
                {
                    "fieldId": "fid_9",
                    "fieldName": "进度",
                    "fieldType": 11,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {
                        "formatter": "0.0%",
                        "min": 10,
                        "max": 1000,
                        "color": 4
                    }
                },
                {
                    "fieldId": "fid_10",
                    "fieldName": "评分",
                    "fieldType": 12,
                    "isPrimary": false,
                    "description": "xxx",
                    "property": {
                        "min": 1,
                        "max": 10,
                        "symbol": "smile"
                    }
                },
                {
                    "fieldId": "fid_14",
                    "fieldName": "用户",
                    "fieldType": 14,
                    "isPrimary": false,
                    "description": "xxx"
                }
            ]
        }; // 获取请求的数据

        // 进行处理，并返回结果
        const result = { code: 0, message: 'POST请求成功', data };
        res.status(200).json(result);

    } else {
        // Handle any other HTTP method
    }
}