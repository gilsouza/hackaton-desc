/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");
const lodash = require("lodash");

const MAX_TIME_EXPERIENCE = 4;

module.exports = () => {
    const data = {
        users: [
            {
                createdAt: "2021-08-05T15:26:31.532Z",
                name: "Lee Cole",
                avatar: "https://cdn.fakercloud.com/avatars/rikas_128.jpg",
                email: "Kurt50@hotmail.com",
                phone: "222-805-5425 x402",
                city: "Noahstad",
                state: "Oregon",
                role: "Dynamic",
                gender: "Cis Woman",
                id: "1",
            },
            {
                createdAt: "2021-08-05T07:44:11.316Z",
                name: "Janis Rice",
                avatar: "https://cdn.fakercloud.com/avatars/davidsasda_128.jpg",
                email: "Curtis_Ortiz@gmail.com",
                phone: "282-242-3402",
                city: "East Elinorstad",
                state: "Wisconsin",
                role: "National",
                gender: "Male to female trans woman",
                id: "2",
            },
            {
                createdAt: "2021-08-05T19:25:14.521Z",
                name: "Harriet Vandervort",
                avatar: "https://cdn.fakercloud.com/avatars/de_ascanio_128.jpg",
                email: "Trudie_Auer@yahoo.com",
                phone: "985.905.2879 x548",
                city: "Schadenborough",
                state: "Rhode Island",
                role: "Future",
                gender: "Transexual Man",
                id: "3",
            },
            {
                createdAt: "2021-08-05T03:20:45.991Z",
                name: "Rachel Armstrong",
                avatar: "https://cdn.fakercloud.com/avatars/simobenso_128.jpg",
                email: "Lawrence_Hegmann@yahoo.com",
                phone: "933-926-5931",
                city: "Mittieshire",
                state: "Kentucky",
                role: "Dynamic",
                gender: "F2M",
                id: "4",
            },
            {
                createdAt: "2021-08-05T18:14:25.312Z",
                name: "Chad Bogan",
                avatar: "https://cdn.fakercloud.com/avatars/peejfancher_128.jpg",
                email: "Lia.Feeney@yahoo.com",
                phone: "1-588-206-2585",
                city: "Gulgowskimouth",
                state: "Indiana",
                role: "Lead",
                gender: "Trans*Male",
                id: "5",
            },
        ],
        careers: [
            {
                createdAt: "2021-08-04T20:58:43.216Z",
                name: "Human Research Engineer",
                title: "Program",
                description:
                    "Officia ipsam fugit eos esse nulla aliquid facilis sunt. Quis modi recusandae ad vel suscipit corporis dicta. Doloribus qui ipsam soluta. Tempora nulla incidunt fugit a voluptatem. Assumenda minus amet sit tempore esse et libero ea rerum. Sit autem est incidunt quisquam voluptas officiis porro.\n \rIpsum voluptatibus ut soluta qui vero voluptates. Explicabo est magni est aut odit. Exercitationem est quia qui.\n \rLaudantium odit unde cum alias. Officia eos molestiae. Sunt ratione velit natus officia aut. Eaque enim error aut quas quaerat necessitatibus voluptatem.",
                id: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T17:16:01.909Z",
                name: "Global Web Analyst",
                title: "Quality",
                description:
                    "Ut et magni est nam accusamus aut vel ut. Quibusdam velit iste accusantium. Aliquam temporibus reprehenderit ut pariatur voluptas perspiciatis asperiores. Est quasi eos voluptas quidem sit eos et.\n \rNon modi assumenda quod. Reiciendis quia officiis enim sed repudiandae enim eligendi qui qui. Eius occaecati non aperiam ut quasi eius sit.\n \rOmnis qui aut qui qui. Nemo aut alias alias quas necessitatibus quaerat numquam dolores. Ex voluptatem aut nisi veritatis.",
                id: "global-web-analyst",
            },
            {
                createdAt: "2021-08-05T16:58:00.721Z",
                name: "Lead Directives Supervisor",
                title: "Implementation",
                description:
                    "Voluptas qui distinctio deleniti ut explicabo temporibus voluptate quam inventore. Eveniet numquam doloremque id quia. In aut provident et. Aliquam explicabo doloribus asperiores officia corporis.\n \rUt doloribus natus velit numquam. Minus et omnis perferendis et eos repellat quo dolores quibusdam. Soluta odit eaque maxime eum quia. Praesentium rerum vel dolorum reprehenderit. Ipsam magni id exercitationem architecto laboriosam aspernatur.\n \rNumquam eum iure est fuga. Eaque doloribus libero quis eos est. Dolorem totam soluta cumque voluptatum velit provident voluptas.",
                id: "lead-directives-supervisor",
            },
            {
                createdAt: "2021-08-05T14:03:27.689Z",
                name: "Investor Group Strategist",
                title: "Usability",
                description:
                    "Ipsam et magnam quia doloribus voluptas rerum molestiae qui. Maxime natus enim. Est at omnis. Pariatur iusto facilis fuga. Et fuga quasi in repudiandae.\n \rAutem sit ut sed voluptatibus dolorem voluptatibus illo quasi ipsum. Ipsum assumenda et adipisci est similique iure fugiat omnis quibusdam. Voluptas corrupti sint eligendi sit aut et. Id ut libero aut. Eaque qui cupiditate. Doloribus dolores molestiae consequatur dolore non dolorem consequatur.\n \rEnim non odit reprehenderit ut voluptas nostrum porro ut. Modi ea fuga recusandae aliquid quos. Autem debitis ea magnam rerum fugit eius non.",
                id: "investor-group-strategist",
            },
            {
                createdAt: "2021-08-05T16:53:51.040Z",
                name: "Regional Paradigm Engineer",
                title: "Operations",
                description:
                    "Id rerum et earum aut vitae omnis. Quam quidem est pariatur facere a reiciendis ratione. Corporis magni dolor quaerat nam maiores. Quos voluptatum ab facilis perspiciatis adipisci. Nulla delectus similique eveniet quos nostrum ut culpa impedit reprehenderit.\n \rNecessitatibus ut itaque. Deleniti molestiae repudiandae dignissimos totam aut. Non possimus eius soluta ab autem incidunt quia sunt. Ex ratione exercitationem accusamus laborum voluptas cumque consequuntur sed accusantium. Et odio minima eaque nesciunt laboriosam quam consequuntur. Rerum et ex earum quidem.\n \rEst atque reiciendis provident et voluptas. Architecto est odit ea repellat repudiandae possimus blanditiis libero. Repellat eveniet vel autem similique expedita. Cumque autem sint quia sunt inventore eaque vel provident. Vero eligendi qui sit minima quis est voluptatem.",
                id: "regional-paradigm-engineer",
            },
        ],
        salaries: lodash.times(120, (n) => ({
            createdAt: Faker.date.between(`2020-09-01`, `2021-08-31`),
            value: Faker.finance.amount(0, 50000, 2),
            time_experience: Faker.datatype.number(MAX_TIME_EXPERIENCE),
            id: n + 1,
            userId: Faker.datatype.number(4) + 1,
        })),
        rating: [
            {
                createdAt: "2021-08-05T08:01:13.408Z",
                is_employed: false,
                salary_range: 4,
                time_employed: 24,
                had_salary_increase: false,
                happy_current_job: false,
                brief: "Omnis sint ipsam enim quasi excepturi. Quae saepe explicabo iste ex a. Placeat architecto ullam eum in libero odio rerum. Nisi itaque sit recusandae et dolorem.",
                id: "1",
            },
            {
                createdAt: "2021-08-05T17:10:38.684Z",
                is_employed: false,
                salary_range: 77,
                time_employed: 49,
                had_salary_increase: false,
                happy_current_job: false,
                brief: "Est inventore aliquam cumque nam dolorum. Voluptatum voluptas minima dolor delectus autem ad quisquam. Esse quidem consectetur et magni ea consectetur ut dolorem quam. Corporis sit ex incidunt eaque voluptatibus odio qui in. Labore labore expedita quia et est natus quia et eos. Aut voluptas repellat eos eos sint.",
                id: "2",
            },
            {
                createdAt: "2021-08-05T04:32:02.222Z",
                is_employed: false,
                salary_range: 10,
                time_employed: 82,
                had_salary_increase: false,
                happy_current_job: false,
                brief: "Ipsam eos eveniet accusamus omnis qui ipsum. Dicta autem perferendis asperiores molestiae. Cum suscipit quibusdam soluta. Reiciendis pariatur aut.",
                id: "3",
            },
            {
                createdAt: "2021-08-05T01:01:57.008Z",
                is_employed: false,
                salary_range: 11,
                time_employed: 36,
                had_salary_increase: false,
                happy_current_job: false,
                brief: "Vel excepturi est ad ab molestias pariatur et ratione velit. Dolores ut sunt sed. Impedit est quia est sit. Voluptatem et sit molestiae sed veritatis laboriosam.",
                id: "4",
            },
            {
                createdAt: "2021-08-05T08:23:07.781Z",
                is_employed: false,
                salary_range: 98,
                time_employed: 92,
                had_salary_increase: false,
                happy_current_job: false,
                brief: "Hic rerum ut repudiandae non nisi sit praesentium natus. Doloremque sequi enim. Neque ea qui. Fugiat dolor maxime iure eos deleniti aut omnis vitae ut. Consectetur provident quia et inventore veritatis et deleniti odio. Expedita labore libero libero molestiae.",
                id: "5",
            },
        ],
        likes: [
            {
                createdAt: "2021-08-05T00:47:26.387Z",
                like: true,
                id: "1",
                briefId: 1,
                userId: 1,
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T20:18:51.931Z",
                like: false,
                id: "2",
                briefId: 1,
                userId: 2,
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T13:40:37.212Z",
                like: true,
                id: "3",
                briefId: 2,
                userId: 3,
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T20:33:43.535Z",
                like: false,
                id: "4",
                briefId: 2,
                userId: 4,
            },
            {
                createdAt: "2021-08-05T00:12:02.256Z",
                like: false,
                id: "5",
                briefId: 3,
                userId: 5,
            },
            {
                createdAt: "2021-08-05T00:12:02.256Z",
                like: false,
                id: "6",
                question_anwserId: 1,
                questionId: 1,
                userId: 5,
            },
            {
                createdAt: "2021-08-05T00:12:02.256Z",
                like: false,
                id: "7",
                question_anwserId: 1,
                questionId: 1,
                userId: 5,
            },
        ],
        question_anwsers: [
            {
                createdAt: "2021-08-05T03:18:21.382Z",
                userId: 1,
                questionId: 2,
                text: "quis corrupti fugit",
                id: "1",
            },
            {
                createdAt: "2021-08-05T03:18:21.382Z",
                userId: 2,
                questionId: 1,
                text: "quis corrupti fugit",
                id: "2",
            },
        ],
        questions: [
            {
                createdAt: "2021-08-05T03:18:21.382Z",
                userId: 1,
                text: Faker.lorem.sentences(4),
                title: "Essa carreira tem oportunidades no RJ?",
                id: "1",
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T05:52:56.688Z",
                userId: 1,
                text: Faker.lorem.sentences(4),
                title: "Qual é o melhor curso sobre essa carreira?",
                id: "2",
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T05:12:28.529Z",
                userId: 2,
                text: Faker.lorem.sentences(4),
                title: "Podem me indicar um curso de pós que tem a ver com essa profissão?",
                id: "3",
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T10:55:13.933Z",
                userId: 2,
                text: Faker.lorem.sentences(4),
                title: "Com quantos paus se faz uma canoa?",
                id: "4",
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T11:30:44.139Z",
                userId: 4,
                text: Faker.lorem.sentences(4),
                title: "Por que tudo junto escreve separado e separado escreve tudo junto?",
                id: "5",
                careerId: "human-research-engineer",
            },
        ],
        briefs: [
            {
                createdAt: "2021-08-05T07:11:59.626Z",
                userId: 2,
                text: "Incidunt aspernatur vel dolore voluptatem quam cupiditate. Harum dolor rem cumque ab debitis. Maiores ipsa aut. Sed facilis minima dolore eligendi ex. Aut natus quasi ducimus animi ex unde perspiciatis. Quia qui possimus sed fuga voluptatibus consequuntur et hic tenetur.\n \rCum sequi ex recusandae nobis aut deleniti. Maiores eos sit eos. Sunt corporis perspiciatis sunt. Provident aut et nulla illum. Soluta cumque quia voluptas velit sapiente sint. Occaecati reiciendis totam architecto dolorem tenetur soluta.\n \rAut quia sit sed non ut eum sit harum. Sunt qui inventore officia cum officia. Dignissimos debitis eum nemo consectetur ex. Libero quis sed omnis reiciendis rerum ad.",
                id: "1",
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T01:46:54.142Z",
                userId: 3,
                text: "Tempore veritatis officiis dolor sint sit. Similique et accusamus. Fugiat esse recusandae veritatis non eius. Illum maiores omnis molestias vero natus est eligendi voluptatem.\n \rHarum dolore sed quia ex. Corrupti quaerat adipisci saepe deleniti et ipsa aut aliquid. Quae et nobis enim deleniti dolor iure porro. Aperiam sit praesentium placeat sit fugiat doloremque.\n \rDolores esse nesciunt error ducimus ullam itaque tempore. Laborum qui assumenda maxime mollitia nulla eum. Voluptatem quaerat dicta commodi ut et et ipsam. Blanditiis voluptas eaque necessitatibus et placeat iure facilis assumenda. Culpa sed est placeat eum nesciunt assumenda. Corporis ea beatae at doloremque asperiores.",
                id: "2",
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T15:56:03.923Z",
                userId: 5,
                text: "Minus culpa at rem nihil et ullam voluptas. Blanditiis placeat numquam. Sed voluptates repellat velit eaque ad deserunt hic. Provident facere non excepturi consequuntur quaerat modi non.\n \rDolores tenetur mollitia consectetur nulla repellendus. Maiores perferendis voluptatum nihil ab voluptatem aperiam. Quas nulla tempore doloremque. Aut libero molestias. Unde et maxime quas libero laboriosam minima. Laudantium eligendi et rerum.\n \rAut harum delectus quia cumque at reprehenderit doloremque magni doloremque. Rerum id sed quibusdam velit quia. Et numquam velit magnam aut et voluptatem sit impedit quae. Et hic non.",
                id: "3",
                careerId: "human-research-engineer",
            },
            {
                createdAt: "2021-08-05T08:38:19.581Z",
                userId: 1,
                text: "Dignissimos velit placeat cumque velit magni. Perspiciatis velit voluptate consectetur fugit odit error explicabo. Et ipsa officia consequatur velit et reiciendis sint est. Quia quae voluptates occaecati unde aut placeat ut voluptatem.\n \rDignissimos sed est placeat. Similique culpa sunt dolores labore quo mollitia. Odio vero sunt eaque.\n \rMaxime omnis quia ipsum. Amet sunt vero quos dignissimos. Voluptatibus accusamus voluptatem ab quod neque.",
                id: "4",
                careerId: "global-web-analyst",
            },
            {
                createdAt: "2021-08-05T03:55:32.872Z",
                userId: 4,
                text: "Dolores ut nulla et eum autem. Quaerat autem dolores fugiat repudiandae. Esse omnis et adipisci. Doloribus iure harum rerum sunt asperiores vero. Et nam totam mollitia iusto est rerum sit ea. Beatae odit minima quia.\n \rSed eligendi est eius officia. Voluptatum nemo velit aut sed optio laborum. Dolores ea reprehenderit natus dolores.\n \rReprehenderit est aut temporibus consequuntur pariatur qui sit. Est harum porro placeat reiciendis. Repellat ipsum dolores ipsam doloremque rem et nisi. Ad quidem illo laudantium temporibus sequi. Quia incidunt in voluptas et.",
                id: "5",
                careerId: "global-web-analyst",
            },
        ],
    };
    return data;
};
