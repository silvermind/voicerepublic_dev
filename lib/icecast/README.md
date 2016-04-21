ICECAST DOCKER SETUP
====================

1. Prerequisites
2. Setup development
3. Setup production (AWS EC2)
4. Notes


Prerequistites
--------------

### Install Docker

```
apt-get -y install apt-transport-https ca-certificates

apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

echo 'deb https://apt.dockerproject.org/repo debian-jessie main' > /etc/apt/sources.list.d/docker.list

apt-get update

apt-get -y install docker-engine
```


Setup development
-----------------

```
docker build -t branch14/icecast2 .
```


Setup production (AWS EC2)
--------------------------

These instructions are based on Debian Jessie.

Spawn an instance of Debian 8 on AWS EC2.

Locally I use an entry in my `~/.ssh/config`. E.g.

```
Host icebox
     ForwardAgent yes
     User root
     IdentityFile ~/.ssh/phil-ffm.pem
     Hostname 52.58.144.188

```

Then...


```
# login as admin
#
#   ssh admin@icebox

sudo -i

# edit/fix `~/.ssh/authorized_keys` so we can login as root

logout

# copy/scp the directory `lib/icecast` over to root
#
#   scp -r lib/icecast icebox:
#
# log in as root
#
#   ssh icebox

apt-get update
export DEBIAN_FRONTEND=noninteractive
apt-get -y install curl

# install docker as described above

mkdir /data
chmod 2777 /data

docker build -t branch14/icecast2 icecast/.
```

Pull an AMI. Done. Add the AMIs id to `settings.yml`.


Notes
-----

```
#docker stop icecast
docker stop icecast
docker rm icecast

apt-get -y install ruby ruby-dev

( cd icecast_setup
  git add .
  git commit -m 'update'
  git pull && git pull )
```

* AWS Security Group `sg-b7d058d0` (Icecast Servers)
* Debian jessie amd64
* Type `t2.micro`

### Resources

* http://stackoverflow.com/questions/5004159/opening-port-80-ec2-amazon-web-services
* https://forum.sourcefabric.org/discussion/13883/icecast-on-port-80/p1