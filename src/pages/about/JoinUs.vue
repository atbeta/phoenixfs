<template>
  <div>
    <home-header></home-header>
    <home-navbar></home-navbar>
    <breadcrumb class="left-nav-breadcrumb" page='加入我们'></breadcrumb>
    <left-nav :index="4">
      <div slot="about-content-title">加入我们</div>
      <div slot="about-content">
        <div class="about-joinus-content">
          <div class="group-title">产品组</div>
          <div class="job-title">一、UE/交互设计师：</div>
          <p class="job-talent">【岗位职责】</p>
          <p>1、依据业务需求及产品规划，分解出交互需求，进行产品原型设计，并保证其可用性、易用性，输出交互设计文档；</p>
          <p>2、对现有产品方案定期进行体验评估，提出改进方案，持续优化产品的用户体验；</p>
          <p>3、配合视觉设计师完成产品视觉设计，并协同前端及开发团队实现交互效果；</p>
          <p>4、解决项目实施过程中可能出现的问题，确保最终的用户体验质量；</p>
          <p>5、与UI设计师努力，逐步建立平台系列产品的视觉、交互设计规范。</p>
          <p class="job-talent">【职位要求】</p>
          <p>1、2年以上Web/App 交互设计经验，熟悉Android、iOS平台设计规范，有独立交互设计项目经验；对用户体验和易用性有敏锐的把握能力；</p>
          <p>2、熟练掌握专业的设计和原型开发工具，如Sketch、Axure，Photoshop，Visio，Illustrator等；</p>
          <p>3、优秀的逻辑思维能力、沟通能力、团队协作能力以及良好的设计表现力，积极主动、关注细节；</p>
          <p>4、本科及以上学历，人机交互、工业设计、计算机、心理学、广告设计等相关专业，</p>
          <p>5、对业界最新的交互趋势、互联网产品的发展趋势有较深刻的理解；</p>
          <p>6、需要至少一个完整项目或者一款成功上线作品。请随简历附上代表作品或相关链接。</p>
          <div class="job-title">二、UI设计师：</div>
          <p class="job-talent">【岗位职责】</p>
          <p>1、负责产品WEB、移动APP系统平台的UI设计，包括外观元素以及风格把控；</p>
          <p>2、参与公司软件产品的UI设计、产品视觉效果的美术创意及设计制作工作 ；</p>
          <p>3、参与产品团队设计讨论，和开发团队共同创建用户界面，跟踪产品效果，提出设计改善方案；</p>
          <p>4、从用户体验角度出发，提供有效的视觉设计，并保持高水准的设计品质；</p>
          <p>5、负责公司运营等品牌宣传的活动页面、宣传资料及其他相关的设计工作。</p>
          <p class="job-talent">【职位要求】</p>
          <p>1、本科及以上学历，美术、设计相关专业；</p>
          <p>2、1年以上UI设计行业经验。具有扎实的美术功底和创意设计能力，较好的审美及色彩搭配感觉；</p>
          <p>3、能够熟练使用各类设计软件，如：Photoshop、Dreamweaver、Fireworks、Illustrator、Indesign；</p>
          <p>4、 能独立完成符合趋势与规范设计需求，具备较强设计展现能力, 以及界面设计的执行能力；</p>
          <p>5、良好的沟通表达能力，积极主动，团队协作能力，眼界开阔，良好的创意思维、创新精神和理解能力。</p>
          <div class="job-title">三、产品专员/主管：</div>
          <p class="job-talent">【岗位职责】</p>
          <p>1、 产品的规划设计、可行性研究，产品方案的执行和跟进；</p>
          <p>2、梳理业务场景，提炼产品需求，确定产品功能；</p>
          <p>3、输出产品文档原型，跟进产品开发进度，协同实施过程中可能出现的问题，确保最终功能实现质量；</p>
          <p>4、协调测试工程师、业务部门人员共同完成产品功能的验收测试；</p>
          <p>5、收集分析竞争对手动态，了解最新行业信息，提出合理化建议</p>
          <p class="job-talent">【职位要求】</p>
          <p>1、本科及以上学历，一年以上产品工作经验，有互联网产品经验优先考虑；</p>
          <p>2、熟悉移动端用户的行为模式，理解学习用户的心理和需求，构建出合理的产品模型；</p>
          <p>3、有较强的逻辑分析能力，能清晰的表达自己的观点，善于沟通；</p>
          <p>4、PRD文档编写，熟练操作Visio、AXURE等产品设计工具软件；</p>
          <p>5、热爱互联网，对互联网及移动互联网产品有浓厚的兴趣。</p>
          <div class="group-title">开发组</div>
          <p class="job-title">一、安卓工程师：</p>
          <p class="job-talent">【岗位职责】</p>
          <p>1、根据产品需求开发手机端、平板端产品；</p>
          <p>2、APP开发及升级维护等相关工作；</p>
          <p>3、优化程序性能，设计、开发和发布应用程序等；</p>
          <p>4、编写相应模块的设计文档，独立完成编码及单元测试；</p>
          <p>5、配合后台同事制定APP与服务器后台数据接口；</p>
          <p>6、解决研发过程中的关键问题和技术问题。</p>
          <p class="job-talent">【任职资格】</p>
          <p>1、大专或以上学历，全日制统招，2年以上工作经验；</p>
          <p>2、熟练掌握Android应用编程、Android系统架构；</p>
          <p>3、有良好的Java基础、 熟悉 eclipse/Android Studio程序调试技巧；具有良好的代码风格；</p>
          <p>4、熟悉多线程、Socket网络编程，熟悉TCP、UDP、HTTP、FTP等网络协议，熟悉XML，JSON数据解析；</p>
          <p>5、能独立进行应用程序开发和维护；</p>
          <p>6、有较强的沟通表达能力，责任心强。</p>
          <p class="job-title">二、IOS工程师：</p>
          <p class="job-talent">【岗位职责】</p>
          <p>1、 iOS平台软件规划设计与开发；</p>
          <p>2、 根据项目任务计划按时完成手机应用开发；</p>
          <p>3、 按照开发流程编写相应模块的设计文档。</p>
          <p class="job-talent">【任职资格】</p>
          <p>1、计算机或相关专业本科以上的学历;</p>
          <p>2、精通Objective-C语言；</p>
          <p>3、具有iOS平台2年以上开发经验;</p>
          <p>4、熟练掌握 UDP/TCP/IP、HTTP 等网络协议；</p>
          <p>5、熟悉多线程开发，理解常用数据交换格式(JSON、XML )等；</p>
          <p>6、熟练使用 SVN 版本控制工具；</p>
          <p>7、积极主动，较强的学习能力和团队合作精神，能够思考和优化解决方案，能够独立完成项目的设计和交付；</p>
          <p>8、在App Store上发布软件者优先 ;</p>
          <p class="job-title">三、架构师：</p>
          <p class="job-talent">【岗位职责】</p>
          <p>1、负责总体系统架构设计，进行技术可行性研究及技术选型，指导项目研发；</p>
          <p>2、核心架构部分代码实现和技术难题攻关；</p>
          <p>3、指导和培养技术团队工程师，协助提升团队整体技术实力；</p>
          <p>4、系统性能优化，保证平台安全、稳定、快速运行。</p>
          <p class="job-talent">【任职资格】</p>
          <p>1、计算机及相关专业本科及以上学历，5年以上大型互联网从业经验；</p>
          <p>2、具有丰富的系统分析与架构设计实践经验，熟悉高性能、高并发、高可用性、高扩展性系统架构设计；</p>
          <p>3、精通JAVA，JVM调优；</p>
          <p>4、精通SpringMVC，Spring，Mybatis等开源框架并熟悉其实现原理，熟悉多线程编程；</p>
          <p>5、精通Http协议，熟悉HttpClient，Jsoup；</p>
          <p>6、精通Mysql数据库，熟练掌握redis,memcached等常用nosql技术；</p>
          <p>7、精通常用设计模式，设计原则；</p>
          <p>8、熟悉分布式、缓存（Redis/Memcached）、消息（ActiveMQ/RabbitMQ）等机制；</p>
          <p>9、熟悉Linux环境以及操作、熟练使用svn、git等版本管理工具；熟练使用Axure等原型工具；</p>
          <p>10、对技术充满热情且具有钻研精神，对新技术以及行业动向保持敏感性；</p>
          <p>11、具有极强的执行力，高度的责任感、很强的学习、沟通能力，能够在高压下高效工作；</p>
          <p class="job-title">四、运维工程师：</p>
          <p class="job-talent">【岗位职责】</p>
          <p>1、负责公司各条产品线的运维管理，对网络状况进行监控、报警；</p>
          <p>2、对产品性能数据进行分析并提交解决方案，对各类技术故障进行处理；</p>
          <p>3、Linux应用环境的各类服务软件例如tomcat、nginx、haproxy等的搭建和维护工作；</p>
          <p>4、MySQL数据库的维护，性能调优，数据备份恢复，数据的导入导出；</p>
          <p>5、开发环境的搭建调优等技术支持，代码服务器的维护。</p>
          <p class="job-talent">【任职资格】</p>
          <p>1、熟悉Mysql/Oracle/SQL Server中的一种数据库，熟悉Weblogic/JBOSS/Tomcat中的一种应用服务器；</p>
          <p>2、有Linux系统运维管理经验，熟悉linux各个发行版本，具有大型互联网公司应用平台运维经验者优先；</p>
          <p>3、对系统常见应用软件有深入理解，如squid、apache、mysql或postgresql、nginx,CDN、VPN、LVS、TTSERVER等，能够快速实施部署、配置及排错；</p>
          <p>4、熟悉应用系统负载测试方法和测试软件，具有相关应用安全、系统安全、信息安全经验；</p>
          <p>5、能熟练地编写脚本（Shell或者Perl,Python,php），使用脚本来完成日常系统运维工作；</p>
          <p>6、熟悉常用的监控系统，如 Zabbix、Nagios 和 Ganglia 等；</p>
          <p>7、了解运维自动化，熟悉配置管理。</p>
          <p class="job-title">五、高级软件工程师：</p>
          <p class="job-talent">【岗位职责】</p>
          <p>1、负责产品平台，业务系统的开发维护工作,充分理解业务，抽象和设计合理的技术方案，高质量交付</p>
          <p class="job-talent">【任职资格】</p>
          <p>1、扎实的java编程基础，精通Java EE，对各种开源的框架如Spring、SpringMVC、MyBatis等有深入的了解，熟悉memcached和redis</p>
          <p>2、三年以上大型数据库如mysql使用经验，3年以上大规模高并发访问的Web应用系统设计和开发经验；</p>
          <p>3、熟练掌握unix、linux操作系统，对常用命令运用娴熟，能够根据实际需要快速编写shell脚本；</p>
          <p>4、具备良好的识别和设计通用框架及模块的能力；</p>
          <p class="job-title">六、Java开发工程师：</p>
          <p class="job-talent">【岗位职责】</p>
          <p>1、在架构\高级软件工程师指导下进行开发工作，负责公司产品平台业务开发。</p>
          <p class="job-talent">【任职要求】</p>
          <p>1、拥有1-2年J2EE系统的研发、实施和维护经验；</p>
          <p>2、精通Spring MVC、Hibernate、ajax等主流java框架技术；</p>
          <p>3、精通Mysql,Oracle数据库编程，熟练编写存储过程、触发器；</p>
          <p>4、熟悉面向对象的分析和设计能力；掌握常用的设计模式；</p>
          <p>6、熟悉javascript、css、JQuery，html等；</p>
          <p class="job-title">七、Web前端开发工程师：</p>
          <p class="job-talent">【岗位职责】</p>
          <p>1、负责产品的web前端功能开发；</p>
          <p>2、负责通用框架、组件及工具的开发和推广；</p>
          <p class="job-talent">【任职资格】</p>
          <p>1、精通html5/CSS3/Javascript，对于页面效果实现有足够的经验；</p>
          <p>2、使用过jquery、zepto、bootstrap等基本类库和框架，有一定的插件开发能力；</p>
          <p>3、熟悉前后端开发流程,有一定的java基础；</p>
          <p>4、熟悉AMD和commonjs等模块化规范，并有熟练经验；</p>
          <p>5、熟悉git、svn等版本控制软件，能写基本的shell命令；</p>
          <p>6、有过Grunt、Gulp或者FIS等工具的使用经验者优先；</p>
          <p>7、有React、Angular、Vuejs等类库或框架使用经验者优先。</p>
          <p>有意者可投简历至：mail@fenghuangjinfu.com</p>
        </div>
      </div>
    </left-nav>
    <home-footer></home-footer>
  </div>
</template>

<script>
import LeftNav from './components/LeftNav'
import Breadcrumb from '../components/Breadcrumb'
import HomeHeader from '../components/Header'
import HomeNavbar from '../components/Navbar'
import HomeFooter from '../components/Footer'
export default {
  name: 'Partner',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeFooter,
    LeftNav,
    Breadcrumb
  }
}
</script>

<style lang="scss" scoped>
  .about-joinus-content{
    margin: 10px 20px 30px;
    font-size: $baseFontSize;
    color: $baseBlack;
    p{
      line-height: 2*$baseFontSize;
      &:last-child{
        margin-top: 50px;
      }
    }
    .group-title{
      font-size: 1.3*$extremeLargeFontSize;
      font-weight: 700;
      color: $joinusBlue;
      text-decoration: underline;
      text-align: center;
      &:last-of-type{
        margin-top: 40px;
      }
    }
    .job-title{
      color: $joinusBlue;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .job-talent{
      margin-bottom: 20px;
    }
    p+.job-talent{
      margin-top: 20px;
    }
    p+.job-title{
      margin-top: 30px;
    }
  }
</style>
