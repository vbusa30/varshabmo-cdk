import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class VarshaDay4Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //define an array with 2 bucket names
    const bucketNames = ['varsha-d4-bucket1', 'varsha-d4-bucket2'];
    //using for loop to create 2 buckets
    for (let i = 0; i < bucketNames.length; i++) {
      new s3.Bucket(this, bucketNames[i], {
        versioned: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        autoDeleteObjects: true, //delete all objects when bucket is deleted
        bucketName: bucketNames[i],
      });
    }

    /*//creating s3 bucket
    const bucket = new cdk.aws_s3.Bucket(this, 'varshad4bucket', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true, //delete all objects when bucket is deleted
      bucketName: 'varsha-d4-bucket',
    });*/
  }
}
