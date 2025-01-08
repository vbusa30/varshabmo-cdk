import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class VarshabmoEc2VpcDay3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // using default vpc
    const vpc = ec2.Vpc.fromLookup(this, 'varshavpc', {
      isDefault: true
    });

    //creating ec2 instance
    const varshavm = new ec2.Instance(this, 'varshavm1', {
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyPair: ec2.KeyPair.fromKeyPairName(this, 'varshakey', 'splunk-key'),   //  splunk-key is the original key name of aws account so we have to use it
      instanceName: 'varsha-linux-vm'  // name of my linux machine
    });
    
    //Output for the Instance ID
    new cdk.CfnOutput(this, 'InstanceID', {
      value : varshavm.instanceId,
      description: 'The ID of the EC2 instance',
    });

    //Output for the Public IP address
    new cdk.CfnOutput(this, 'InstancePublicIP', {
      value : varshavm.instancePublicIp,
      description: 'The public IP address of the EC2 instance',
    });
  }
}
