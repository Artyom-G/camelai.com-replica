import Carousel from "./Carousel";

export default function SectionCarousel() {
    return (
        <div className="flex justify-center relative pt-[100px] pb-[100px]">
            <div
                className="absolute inset-0 bg-repeat-x bg-center opacity-60 w-full max-w-[1200px] left-1/2 transform -translate-x-1/2 top-14 z-0"
                style={{
                    backgroundImage: "url('https://camelai.com/assets/images/backshape.png')",
                    backgroundSize: "auto 100%",
                    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
                }}
            />
            <div className="relative z-10">
                <Carousel
                    logos={[
                        { imageSrc: "https://camelai.com/assets/images/postgres-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/duckdb-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/linkedin-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/airtable-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/snowflake-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/dynmodb-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/csv-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/sqlite-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/bigquery-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/mongodb-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/motherduck-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/clickhouse-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/excel-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/mysql-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/supabase-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/sheets-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/salesforce-square.png", link: "/" },
                    ]}
                    speed={0.3}
                />
                <Carousel
                    logos={[
                        { imageSrc: "https://camelai.com/assets/images/salesforce-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/sheets-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/supabase-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/mysql-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/excel-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/clickhouse-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/motherduck-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/bigquery-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/sqlite-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/csv-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/dynmodb-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/snowflake-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/airtable-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/linkedin-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/duckdb-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/mongodb-square.png", link: "/" },
                        { imageSrc: "https://camelai.com/assets/images/postgres-square.png", link: "/" },
                    ]}
                    speed={-0.3}
                />
            </div>
        </div>
    );
}
