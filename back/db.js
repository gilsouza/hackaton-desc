/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");

const MAX_TIME_EXPERIENCE = 10;

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
                position: "Dynamic",
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
                position: "National",
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
                position: "Future",
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
                position: "Dynamic",
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
                position: "Lead",
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
                id: "1",
            },
            {
                createdAt: "2021-08-05T17:16:01.909Z",
                name: "Global Web Analyst",
                title: "Quality",
                description:
                    "Ut et magni est nam accusamus aut vel ut. Quibusdam velit iste accusantium. Aliquam temporibus reprehenderit ut pariatur voluptas perspiciatis asperiores. Est quasi eos voluptas quidem sit eos et.\n \rNon modi assumenda quod. Reiciendis quia officiis enim sed repudiandae enim eligendi qui qui. Eius occaecati non aperiam ut quasi eius sit.\n \rOmnis qui aut qui qui. Nemo aut alias alias quas necessitatibus quaerat numquam dolores. Ex voluptatem aut nisi veritatis.",
                id: "2",
            },
            {
                createdAt: "2021-08-05T16:58:00.721Z",
                name: "Lead Directives Supervisor",
                title: "Implementation",
                description:
                    "Voluptas qui distinctio deleniti ut explicabo temporibus voluptate quam inventore. Eveniet numquam doloremque id quia. In aut provident et. Aliquam explicabo doloribus asperiores officia corporis.\n \rUt doloribus natus velit numquam. Minus et omnis perferendis et eos repellat quo dolores quibusdam. Soluta odit eaque maxime eum quia. Praesentium rerum vel dolorum reprehenderit. Ipsam magni id exercitationem architecto laboriosam aspernatur.\n \rNumquam eum iure est fuga. Eaque doloribus libero quis eos est. Dolorem totam soluta cumque voluptatum velit provident voluptas.",
                id: "3",
            },
            {
                createdAt: "2021-08-05T14:03:27.689Z",
                name: "Investor Group Strategist",
                title: "Usability",
                description:
                    "Ipsam et magnam quia doloribus voluptas rerum molestiae qui. Maxime natus enim. Est at omnis. Pariatur iusto facilis fuga. Et fuga quasi in repudiandae.\n \rAutem sit ut sed voluptatibus dolorem voluptatibus illo quasi ipsum. Ipsum assumenda et adipisci est similique iure fugiat omnis quibusdam. Voluptas corrupti sint eligendi sit aut et. Id ut libero aut. Eaque qui cupiditate. Doloribus dolores molestiae consequatur dolore non dolorem consequatur.\n \rEnim non odit reprehenderit ut voluptas nostrum porro ut. Modi ea fuga recusandae aliquid quos. Autem debitis ea magnam rerum fugit eius non.",
                id: "4",
            },
            {
                createdAt: "2021-08-05T16:53:51.040Z",
                name: "Regional Paradigm Engineer",
                title: "Operations",
                description:
                    "Id rerum et earum aut vitae omnis. Quam quidem est pariatur facere a reiciendis ratione. Corporis magni dolor quaerat nam maiores. Quos voluptatum ab facilis perspiciatis adipisci. Nulla delectus similique eveniet quos nostrum ut culpa impedit reprehenderit.\n \rNecessitatibus ut itaque. Deleniti molestiae repudiandae dignissimos totam aut. Non possimus eius soluta ab autem incidunt quia sunt. Ex ratione exercitationem accusamus laborum voluptas cumque consequuntur sed accusantium. Et odio minima eaque nesciunt laboriosam quam consequuntur. Rerum et ex earum quidem.\n \rEst atque reiciendis provident et voluptas. Architecto est odit ea repellat repudiandae possimus blanditiis libero. Repellat eveniet vel autem similique expedita. Cumque autem sint quia sunt inventore eaque vel provident. Vero eligendi qui sit minima quis est voluptatem.",
                id: "5",
            },
        ],
        salaries: [
            {
                createdAt: "2021-08-05T07:14:05.100Z",
                value: Faker.finance.amount(0, 50000, 2, "R$"),
                time_experience: Faker.datatype.number(MAX_TIME_EXPERIENCE),
                id: "1",
                userId: 1,
            },
            {
                createdAt: "2021-08-05T18:09:23.048Z",
                value: Faker.finance.amount(0, 50000, 2, "R$"),
                time_experience: Faker.datatype.number(MAX_TIME_EXPERIENCE),
                id: "2",
                userId: 2,
            },
            {
                createdAt: "2021-08-05T06:53:29.899Z",
                value: Faker.finance.amount(0, 50000, 2, "R$"),
                time_experience: Faker.datatype.number(MAX_TIME_EXPERIENCE),
                id: "3",
                userId: 3,
            },
            {
                createdAt: "2021-08-05T04:51:49.290Z",
                value: Faker.finance.amount(0, 50000, 2, "R$"),
                time_experience: Faker.datatype.number(MAX_TIME_EXPERIENCE),
                id: "4",
                userId: 4,
            },
            {
                createdAt: "2021-08-05T11:09:12.751Z",
                value: Faker.finance.amount(0, 50000, 2, "R$"),
                time_experience: Faker.datatype.number(MAX_TIME_EXPERIENCE),
                id: "5",
                userId: 5,
            },
        ],
        questions: [],
    };
    return data;
};
