namespace Learn2Learn.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Results", "userVAK", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Results", "userVAK");
        }
    }
}
