const JobCard = ({ bey, job, userId, login, page, setSaved }) => {
  
  console.log(job);
  Axios.delete(`/api/users/saved/`, {
    job: job,
    user_id: userId,
  }).then((res) => {
    let results = res.data;
    console.log("updatedList: ", results);
    setSaved(results);
    // fetchSavedJobs()
  });
;

return (
  <li key={bey} className="jobCard">
    <h4>{job.positionTitle || job.PositionTitle}</h4>
    {"\n"}
    Company: {job.companyName || job.DepartmentName} Location: {job.location || job.PositionLocationDisplay}
    {"\n"}
    <p>Description: {job.description || job.UserArea.Details.MajorDuties}</p>
    <div className='jobButtons'>
      <a target="_blank" rel="noreferrer" href={job.link || job.ApplyURI}>View Job</a>
      {/* Tabled for v1.1 where we will need login and resume more */}
      {/* {page === 'search' &&
        <FavoriteButton job={job} userId={userId} login={login}/>
      }
      {page === 'profile' && 
        <button onClick={() => {removeFavorite(job)}}>Remove</button>
      } */}
    </div>
  </li>
);
};

export default JobCard;