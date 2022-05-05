(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{541:function(s,e,n){"use strict";n.r(e);var a=n(21),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一、搭建集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、搭建集群"}},[s._v("#")]),s._v(" 一、搭建集群")]),s._v(" "),n("p",[s._v("Redis Cluster集群要求必须有3个master才构成一个集群，所以我这里采用3主3从的方式，实际生产中的高可用至少3主6从")]),s._v(" "),n("p",[s._v("（1）使用docker-compose启动6个redis容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('version: \'3.7\'\n\nservices:\n  redis7001:\n    image: \'redis:6.2.4\'\n    container_name: redis7001\n    command:\n      ["redis-server", "/etc/redis/redis.conf"]\n    volumes:\n      - /opt/docker/redis/7001/redis.conf:/etc/redis/redis.conf\n      - /opt/docker/redis/7001/data:/data\n    ports:\n      - "7001:7001"\n      - "17001:17001"\n    environment:\n      - TZ=Asia/Shanghai\n  redis7002:\n    image: \'redis:6.2.4\'\n    container_name: redis7002\n    command:\n      ["redis-server", "/etc/redis/redis.conf"]\n    volumes:\n      - /opt/docker/redis/7002/redis.conf:/etc/redis/redis.conf\n      - /opt/docker/redis/7002/data:/data\n    ports:\n      - "7002:7002"\n      - "17002:17002"\n    environment:\n      - TZ=Asia/Shanghai\n  redis7003:\n    image: \'redis:6.2.4\'\n    container_name: redis7003\n    command:\n      ["redis-server", "/etc/redis/redis.conf"]\n    volumes:\n      - /opt/docker/redis/7003/redis.conf:/etc/redis/redis.conf\n      - /opt/docker/redis/7003/data:/data\n    ports:\n      - "7003:7003"\n      - "17003:17003"\n    environment:\n      - TZ=Asia/Shanghai\n  redis7004:\n    image: \'redis:6.2.4\'\n    container_name: redis7004\n    command:\n      ["redis-server", "/etc/redis/redis.conf"]\n    volumes:\n      - /opt/docker/redis/7004/redis.conf:/etc/redis/redis.conf\n      - /opt/docker/redis/7004/data:/data\n    ports:\n      - "7004:7004"\n      - "17004:17004"\n    environment:\n      - TZ=Asia/Shanghai\n  redis7005:\n    image: \'redis:6.2.4\'\n    container_name: redis7005\n    command:\n      ["redis-server", "/etc/redis/redis.conf"]\n    volumes:\n      - /opt/docker/redis/7005/redis.conf:/etc/redis/redis.conf\n      - /opt/docker/redis/7005/data:/data\n    ports:\n      - "7005:7005"\n      - "17005:17005"\n    environment:\n      - TZ=Asia/Shanghai\n  redis7006:\n    image: \'redis:6.2.4\'\n    container_name: redis7006\n    command:\n      ["redis-server", "/etc/redis/redis.conf"]\n    volumes:\n      - /opt/docker/redis/7006/redis.conf:/etc/redis/redis.conf\n      - /opt/docker/redis/7006/data:/data\n    ports:\n      - "7006:7006"\n      - "17006:17006"\n    environment:\n      - TZ=Asia/Shanghai\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@shang redis]# docker ps\nCONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS         PORTS                                                                                                NAMES\ne3018a083b37   redis:6.2.4   "docker-entrypoint.s…"   13 seconds ago   Up 4 seconds   0.0.0.0:7003->7003/tcp, :::7003->7003/tcp, 6379/tcp, 0.0.0.0:17003->17003/tcp, :::17003->17003/tcp   redis7003\n911dc36fe35a   redis:6.2.4   "docker-entrypoint.s…"   13 seconds ago   Up 4 seconds   0.0.0.0:7005->7005/tcp, :::7005->7005/tcp, 6379/tcp, 0.0.0.0:17005->17005/tcp, :::17005->17005/tcp   redis7005\nefabccd7769c   redis:6.2.4   "docker-entrypoint.s…"   13 seconds ago   Up 6 seconds   0.0.0.0:7004->7004/tcp, :::7004->7004/tcp, 6379/tcp, 0.0.0.0:17004->17004/tcp, :::17004->17004/tcp   redis7004\ndb48c12796cb   redis:6.2.4   "docker-entrypoint.s…"   13 seconds ago   Up 4 seconds   0.0.0.0:7002->7002/tcp, :::7002->7002/tcp, 6379/tcp, 0.0.0.0:17002->17002/tcp, :::17002->17002/tcp   redis7002\nc717621d2c7b   redis:6.2.4   "docker-entrypoint.s…"   13 seconds ago   Up 4 seconds   0.0.0.0:7006->7006/tcp, :::7006->7006/tcp, 6379/tcp, 0.0.0.0:17006->17006/tcp, :::17006->17006/tcp   redis7006\n10fd3e24f10f   redis:6.2.4   "docker-entrypoint.s…"   13 seconds ago   Up 4 seconds   0.0.0.0:7001->7001/tcp, :::7001->7001/tcp, 6379/tcp, 0.0.0.0:17001->17001/tcp, :::17001->17001/tcp   redis7001\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("（2）查看redis集群 "),n("code",[s._v("[cluster]")]),s._v("表示为集群，但此时它们之间并没有建立联系，也没有分配slot。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@shang 7001]# ps -ef | grep redis\npolkitd    3888   3867  0 09:10 ?        00:00:02 redis-server *:7001 [cluster]\npolkitd    4143   4120  0 09:14 ?        00:00:01 redis-server *:7002 [cluster]\npolkitd    4257   4235  0 09:17 ?        00:00:01 redis-server *:7003 [cluster]\npolkitd    4373   4352  0 09:20 ?        00:00:00 redis-server *:7004 [cluster]\npolkitd    4490   4469  0 09:22 ?        00:00:00 redis-server *:7005 [cluster]\npolkitd    4604   4581  0 09:23 ?        00:00:00 redis-server *:7006 [cluster]\nroot       4667   1576  0 09:24 pts/0    00:00:00 grep --color=auto redis\n\n[root@shang 7001]# docker exec -it redis7001 redis-cli -p 7001 # 进入端口为7001的redis7001容器\n127.0.0.1:7001> cluster nodes # 查看集群节点信息\n87346232e7666c772d304518fa4215804be3f576 :7001@17001 myself,master - 0 0 0 connected\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("（3）建立联系,并分配slot")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看帮助命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shang "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it redis7001 redis-cli --cluster help ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# meet")]),s._v("\ncreate         host1:port1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". hostN:portN\n                 --cluster-replicas "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("blockquote",[n("p",[s._v("docker exec -it redis7001 redis-cli --cluster create 192.168.16.3:7001 192.168.16.3:7002 192.168.16.3:7003 192.168.16.3:7004 192.168.16.3:7005 192.168.16.3:7006 --cluster-replicas 1\n建立cluster联系，按照 1:1 的方式（3:3），前三个为master，后三个为slave。\n如果 "),n("code",[s._v("--cluster-replicas 2")]),s._v("，表示按照 1:2 的方式（3:6)，前三个为master，后三个为slave")])]),s._v(" "),n("p",[s._v("（4）查看是否搭建成功")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@shang "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it redis7001 redis-cli -p 7001 # 进入端口为7001的redis7001容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:700"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" cluster nodes "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群节点信息")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"二、集群扩容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、集群扩容"}},[s._v("#")]),s._v(" 二、集群扩容")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis7001 redis-cli --cluster "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看帮助命令")]),s._v("\nadd-node  new_host:new_port existing_host:existing_port "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新redis   集群中任一redis")]),s._v("\n          --cluster-slave  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标志为从机")]),s._v("\n          --cluster-master-id "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定从属于哪个主机，master-id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 扩容一个slave\t\t\t\t ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis7001 redis-cli --cluster add-node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.3:7007 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.3:7001 --cluster-slave --cluster-master-id 87346232e7666c772d304518fa4215804be3f576\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 扩容一个master，并分配slot")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis7001 redis-cli --cluster add-node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.3:7008 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.3:7001\nreshard  host:port "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 集群任一节点")]),s._v("\n         --cluster-from "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 带有slot的master节点id，多个以 , 隔开")]),s._v("\n         --cluster-to "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分配给哪个master节点id，多个以 , 隔开")]),s._v("\n         --cluster-slots "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 总共分配多少slot")]),s._v("\n         --cluster-yes "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跳过确认")]),s._v("\n         --cluster-timeout "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n         --cluster-pipeline "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 控制每次批量迁移键的数量，默认为10")]),s._v("\n         --cluster-replace\n\t\t\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis7001 redis-cli --cluster reshard "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.3:7007 --cluster-from 87346232e7666c772d304518fa4215804be3f576,4979d1b009f30576c4ba7587c01176275cf81628 --cluster-to 90afcac7725cac92e9b064f3a71348b9913c7eb3  --cluster-slots "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" --cluster-yes\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"三、集群缩容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、集群缩容"}},[s._v("#")]),s._v(" 三、集群缩容")]),s._v(" "),n("blockquote",[n("p",[s._v("先移除某一个master节点的所有slave，避免选举为master。\n移除master之前，要将master上的slot分配给其它存活的master，然后再删除当前master，避免数据丢失。")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除slave")]),s._v("\n del-node host:port node_id "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 任一集群节点   需要删除的节点id")]),s._v("\n \n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis7001 redis-cli --cluster del-node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.3:7001 3a29bd1d4e885cdfe5e03185183b88da2cfd5115\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分离slot")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis7001 redis-cli --cluster reshard "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.3:7001 --cluster-from 90afcac7725cac92e9b064f3a71348b9913c7eb3 --cluster-to 05abce1703ec1aca5e38548ca2c252c4713c5840 --cluster-slots "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" --cluster-yes\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis7001 redis-cli --cluster del-node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.3:7001 90afcac7725cac92e9b064f3a71348b9913c7eb3 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除master 7008")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("原文地址：https://www.cnblogs.com/shangstudy/p/14893158.html")])])}),[],!1,null,null,null);e.default=t.exports}}]);