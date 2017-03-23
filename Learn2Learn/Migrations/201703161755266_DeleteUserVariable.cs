namespace Learn2Learn.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteUserVariable : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Results", "userVAK");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Results", "userVAK", c => c.String());
        }
    }
}
