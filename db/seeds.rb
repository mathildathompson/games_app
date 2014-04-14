User.destroy_all
Portfolio.destroy_all
Education.destroy_all
Career.destroy_all

# Olly's seed data
u1 = User.create(:first_name => 'Oliver', :last_name => 'Dutton', :github => 'https://github.com/ollyd', 
    :linkedin => 'http://www.linkedin.com/profile/view?id=74952025', :email => 'ollydutton@gmail.com', 
    :twitter => 'https://twitter.com/hacks_n_stacks', :password => 'admin', :password_confirmation => 'admin')

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

# Tom's seed data


u2 = User.create(:first_name => 'Tom', :last_name => 'Dane', :github => '', 
    :linkedin => '', :email => 'tjdane@gmail.com', 
    :twitter => '', :password => 'admin', :password_confirmation => 'admin')

u2.admin = true
u2.save



# Erik's seed data


u3 = User.create(:first_name => 'Erik', :last_name => 'Froese', :github => '', 
    :linkedin => 'http://www.linkedin.com/pub/erik-froese/33/878/829', :email => 'froesecom@gmail.com', 
    :twitter => 'http://twitter.com/eafroese', :password => 'admin', :password_confirmation => 'admin')

p3 = Portfolio.create(:title => 'Bad Hair Day Predictor', :link => 'http://bad-hair-day-predictor.herokuapp.com/', :image => '')

c6 = Career.create(:job_title => 'Manager, Media & Communications', :job_description => 'Manage the strategy and operations of the APA’s media work and digital communications.',
    :company => 'Australian Physiotherapy Association', :start_date => '21/02/2012', :end_date => 'Present.')
c7 = Career.create(:job_title => 'Writer/Editor', :job_description => 'Research, write, and edit content for print and digital publication.',
    :company => 'Australian Physiotherapy Association', :start_date => '01/05/2009', :end_date => '20/02/2012')
c8 = Career.create(:job_title => 'Writer', :job_description => 'plan, research, write, and edit articles on a variety of topics.',
    :company => 'Freelance', :start_date => '1/01/2004', :end_date => '20/04/2009')

e6 = Education.create(:institution => 'General Assembly', :course => 'Web Development Immersive', 
    :start_date => '24/02/2014', :end_date => '24/05/2014' )
e7 = Education.create(:institution => 'Association for Data-driven Marketing & Advertising', :course => 'Digital Marketing Certificate', 
    :start_date => '01/01/2013', :end_date => '30/04/2002' )
e8 = Education.create(:institution => 'University of Calgary', :course => 'Bachelor of Science, Biology', 
    :start_date => '01/09/1997', :end_date => '30/06/2002' )

u3.portfolios << p3


u3.careers << c6
u3.careers << c7
u3.careers << c8

u3.educations << e6
u3.educations << e7
u3.educations << e8

u3.admin = true
u3.save







