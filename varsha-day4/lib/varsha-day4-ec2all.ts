import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class VarshaDay4Ec2all extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // using default vpc
    const vpc = ec2.Vpc.fromLookup(this, 'varshad4vpc', {
      isDefault: true
    });

    //Creating a security group
    const securityGroup = new ec2.SecurityGroup(this, 'varshad4SG', {
      vpc,
      allowAllOutbound: true,
      securityGroupName: 'varshad4-sg',
      description: 'Allow SSH, HTTP and HTTPS access to ec2 instances from anywhere'
    });

    //adding ingress rule to security group
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH');
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP');
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow HTTPS');
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(21), 'Allow FTP');

    //creating ec2 instance
    const varshad4vm = new ec2.Instance(this, 'varshad4vm1', {
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyPair: ec2.KeyPair.fromKeyPairName(this, 'varshad4key', 'splunk-key'),   //  splunk-key is the original key name of aws account so we have to use it
      instanceName: 'varsha-d4-vm',  // name of my linux machine
      securityGroup: securityGroup,
    });
  }
}
