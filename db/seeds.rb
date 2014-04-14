User.destroy_all
Portfolio.destroy_all
Education.destroy_all
Career.destroy_all

u1 = User.create(:first_name => 'Oliver', :last_name => 'Dutton', :github => 'https://github.com/ollyd', 
    :linkedin => 'http://www.linkedin.com/profile/view?id=74952025', :email => 'ollydutton@gmail.com', 
    :twitter => 'https://twitter.com/hacks_n_stacks', :password => 'admin', :password_confirmation => 'admin')

u2 = User.create(:first_name => 'Tom', :last_name => 'Dane', :github => '', 
    :linkedin => '', :email => 'tjdane@gmail.com', 
    :twitter => '', :password => 'admin', :password_confirmation => 'admin')

u3 = User.create(:first_name => 'Erik', :last_name => 'Froese', :github => '', 
    :linkedin => '', :email => 'froesecom@gmail.com', 
    :twitter => '', :password => 'admin', :password_confirmation => 'admin')

p1 = Portfolio.create(:title => 'CoinHome', :link => 'http://coinhome.herokuapp.com/', :image => '')

e1 = Education.create(:institution => 'Bournemouth University', :course => 'BA in Advertising & Marketing Communications', 
    :start_date => '01/09/2000', :end_date => '30/06/2003' )


e2 = Education.create(:institution => 'General Assembly', :course => 'Web Development Immersive', 
    :start_date => '24/02/2014', :end_date => '24/05/2014' )

e3 = Education.create(:institution => 'Islington Music Workshop', :course => 'Sound Engineering & Music Tech', 
    :start_date => '01/03/2004', :end_date => '28/02/2005' )


c1 = Career.create(:job_title => 'Search & Innovations Director', :job_description => 'Tasked with creating an Innovations team in order to diversify 
    our business offering. Working closely with Maxus\' creative technology R&D division, Metalworks Singapore.',
    :company => 'Maxus', :start_date => '1/06/2013', :end_date => '20/02/2014')

c2 = Career.create(:job_title => 'Associate Search Director', :job_description => '2IC of the Maxus Australia Search Team. 
    Primarily SEM and SEO, however, exxperienced in everything Performance Media related, e.g. Facebook Advertising, Display, Retargeting, Mobile and Video.',
    :company => 'Maxus', :start_date => '19/01/2012', :end_date => '31/05/2013')

c3 = Career.create(:job_title => 'Senior Search Manager', :job_description => 'Managed a Search Team for key client accounts across some of the most challenging verticals, 
    including Vodafone (Telco), and CBA (Finance).',
    :company => 'Ikon', :start_date => '01/06/2011', :end_date => '17/01/2012')


u1.portfolios << p1

u1.educations << e2
u1.educations << e1

u1.careers << c1
u1.careers << c2
u1.careers << c3

u1.admin = true
u1.save

u2.admin = true
u2.save

u3.admin = true
u3.save

