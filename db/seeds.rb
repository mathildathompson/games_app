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


c1 = Career.create(:job_title => 'Search & Innovations Director', :job_description => 'Blah blah blah bleurgh...',
    :company => 'Maxus', :start_date => '1/07/2013', :end_date => '20/02/2014')

c2 = Career.create(:job_title => 'Associate Search Director', :job_description => 'SEM/SEO rumpy pumpy...',
    :company => 'Maxus', :start_date => '19/01/2012', :end_date => '30/06/2013')


u1.portfolios << p1
u1.educations << e1
u1.educations << e2
u1.careers << c1
u1.careers << c2

u1.admin = true
u1.save

u2.admin = true
u2.save

u3.admin = true
u3.save

