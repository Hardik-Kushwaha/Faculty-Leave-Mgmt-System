

<% include ./partial/header %><% include ./partial/hodfunction %>
<div
  class="col-sm-6"
  style="flex: 0 0 50%;
    max-width: 60%;
    margin-left: 431px;
    margin-top: -251px;  text-align: -webkit-center;"
>
  <form action="/hod/<%=hod.id%>/leave/<%=faculty.id%>/info" method="POST">
    <div class="container-fluid bg-3 text-center">
      <h2 style="margin-top: 40px;"><%=faculty.name %></h2>
      <br>
      <div class="row">
        
        <%faculty.leaves.forEach(function(leave){%>
          <% if (leave.status !== 'approved' && leave.status !== 'denied') { %>
            <div class="col-sm-4" style="width: 100%;
                                      border: 1px;
                                      padding-left: 20px;
                                      padding-top: 20px;
                                      padding-bottom: 20px;
                                      border-color: rgb(230, 230, 230);
                                      border-radius: 30px;
                                      border-style: ridge;
                                      margin: 0px;">
              <h4><strong> Subject:</strong> <%=leave.subject %></h4>
              <h5 style="color: rgb(0, 120, 160);">Status: <%=leave.status %></h5>
              <h5 style="color: rgb(0, 120, 160);">From: <%=moment(leave.from).format('DD/MM/YYYY') %></h5>
              <h5 style="color: rgb(0, 120, 160);">To: <%=moment(leave.to).format('DD/MM/YYYY') %></h5>
              <h5 style="color: rgb(0, 120, 160);">Total Days: <%=leave.days%></h5>
              <h5 style="color: rgb(0, 120, 160);">Department: <%=faculty.department %></h5>
              <h5 style="color: rgb(0, 120, 160);">Department: <%=faculty.department %></h5>      
              <div class="col-sm-6">
                <input
                  type="submit"
                  class="btn btn-block btn-success"
                  name="action"
                  value="Approve"
                />
                <input
                  type="submit"
                  class="btn btn-block btn-danger"
                  name="action"
                  value="Deny"
                />
              </div>
            </div>
          <% } %>
        <%})%>    

        <div class="col-sm-4" style="width: 100%;
                              border: 1px;
                              padding-left: 20px;
                              padding-top: 20px;
                              padding-bottom: 20px;
                              border-color: rgb(230, 230, 230);
                              border-radius: 30px;
                              border-style: ridge;
                              margin: 0px;">
          <h4><strong> Subject:</strong> <%=leave.subject %></h4>
          <h5>Status: <%=leave.status %></h5>
          <h5>From: <%=moment(leave.from).format('DD/MM/YYYY') %></h5>
          <h5>To: <%=moment(leave.to).format('DD/MM/YYYY') %></h5>
          <h5>Total Days: <%=leave.days%></h5>
          <h5>Department: <%=faculty.department %></h5>
          <div class="col-sm-6">
            <input
              type="submit"
              class="btn btn-block btn-success"
              name="action"
              value="Approve"
            />
            <input
              type="submit"
              class="btn btn-block btn-danger"
              name="action"
              value="Deny"
            />
          </div>
        </div>
        <a style="position: absolute; top: 100%; left:0%;" href="/hod/<%=hod._id%>/leave">Back</a>
        <%})%>

      </div>
    </div>
  </form>
  <% include ./partial/footer %>
</div><% include ./partial/header %><% include ./partial/hodfunction %>
<div
  class="col-sm-6"
  style="flex: 0 0 50%;
    max-width: 60%;
    margin-left: 431px;
    margin-top: -251px;  text-align: -webkit-center;"
>
  <form action="/hod/<%=hod.id%>/leave/<%=faculty.id%>/info" method="POST">
    <div class="container-fluid bg-3 text-center">
      <h2 style="margin-top: 40px;"><%=faculty.name %></h2>
      <br>
      <div class="row">
        
        <%faculty.leaves.forEach(function(leave){%>
          <% if (leave.status !== 'approved' && leave.status !== 'denied') { %>
            <div class="col-sm-4" style="width: 100%;
                                      border: 1px;
                                      padding-left: 20px;
                                      padding-top: 20px;
                                      padding-bottom: 20px;
                                      border-color: rgb(230, 230, 230);
                                      border-radius: 30px;
                                      border-style: ridge;
                                      margin: 0px;">
              <h4><strong> Subject:</strong> <%=leave.subject %></h4>
              <h5 style="color: rgb(0, 120, 160);">Status: <%=leave.status %></h5>
              <h5 style="color: rgb(0, 120, 160);">From: <%=moment(leave.from).format('DD/MM/YYYY') %></h5>
              <h5 style="color: rgb(0, 120, 160);">To: <%=moment(leave.to).format('DD/MM/YYYY') %></h5>
              <h5 style="color: rgb(0, 120, 160);">Total Days: <%=leave.days%></h5>
              <h5 style="color: rgb(0, 120, 160);">Department: <%=faculty.department %></h5>
              <h5 style="color: rgb(0, 120, 160);">Department: <%=faculty.department %></h5>      
              <div class="col-sm-6">
                <input
                  type="submit"
                  class="btn btn-block btn-success"
                  name="action"
                  value="Approve"
                />
                <input
                  type="submit"
                  class="btn btn-block btn-danger"
                  name="action"
                  value="Deny"
                />
              </div>
            </div>
          <% } %>
        <%})%>    

        <div class="col-sm-4" style="width: 100%;
                              border: 1px;
                              padding-left: 20px;
                              padding-top: 20px;
                              padding-bottom: 20px;
                              border-color: rgb(230, 230, 230);
                              border-radius: 30px;
                              border-style: ridge;
                              margin: 0px;">
          <h4><strong> Subject:</strong> <%=leave.subject %></h4>
          <h5>Status: <%=leave.status %></h5>
          <h5>From: <%=moment(leave.from).format('DD/MM/YYYY') %></h5>
          <h5>To: <%=moment(leave.to).format('DD/MM/YYYY') %></h5>
          <h5>Total Days: <%=leave.days%></h5>
          <h5>Department: <%=faculty.department %></h5>
          <div class="col-sm-6">
            <input
              type="submit"
              class="btn btn-block btn-success"
              name="action"
              value="Approve"
            />
            <input
              type="submit"
              class="btn btn-block btn-danger"
              name="action"
              value="Deny"
            />
          </div>
        </div>
        <a style="position: absolute; top: 100%; left:0%;" href="/hod/<%=hod._id%>/leave">Back</a>
        <%})%>

      </div>
    </div>
  </form>
  <% include ./partial/footer %>
</div><% include ./partial/header %><% include ./partial/hodfunction %>
<div
  class="col-sm-6"
  style="flex: 0 0 50%;
    max-width: 60%;
    margin-left: 431px;
    margin-top: -251px;  text-align: -webkit-center;"
>
  <form action="/hod/<%=hod.id%>/leave/<%=faculty.id%>/info" method="POST">
    <div class="container-fluid bg-3 text-center">
      <h2 style="margin-top: 40px;"><%=faculty.name %></h2>
      <br>
      <div class="row">
        
        <%faculty.leaves.forEach(function(leave){%>
          <% if (leave.status !== 'approved' && leave.status !== 'denied') { %>
            <div class="col-sm-4" style="width: 100%;
                                      border: 1px;
                                      padding-left: 20px;
                                      padding-top: 20px;
                                      padding-bottom: 20px;
                                      border-color: rgb(230, 230, 230);
                                      border-radius: 30px;
                                      border-style: ridge;
                                      margin: 0px;">
              <h4><strong> Subject:</strong> <%=leave.subject %></h4>
              <h5 style="color: rgb(0, 120, 160);">Status: <%=leave.status %></h5>
              <h5 style="color: rgb(0, 120, 160);">From: <%=moment(leave.from).format('DD/MM/YYYY') %></h5>
              <h5 style="color: rgb(0, 120, 160);">To: <%=moment(leave.to).format('DD/MM/YYYY') %></h5>
              <h5 style="color: rgb(0, 120, 160);">Total Days: <%=leave.days%></h5>
              <h5 style="color: rgb(0, 120, 160);">Department: <%=faculty.department %></h5>
              <h5 style="color: rgb(0, 120, 160);">Department: <%=faculty.department %></h5>      
              <div class="col-sm-6">
                <input
                  type="submit"
                  class="btn btn-block btn-success"
                  name="action"
                  value="Approve"
                />
                <input
                  type="submit"
                  class="btn btn-block btn-danger"
                  name="action"
                  value="Deny"
                />
              </div>
            </div>
          <% } %>
        <%})%>    

        <div class="col-sm-4" style="width: 100%;
                              border: 1px;
                              padding-left: 20px;
                              padding-top: 20px;
                              padding-bottom: 20px;
                              border-color: rgb(230, 230, 230);
                              border-radius: 30px;
                              border-style: ridge;
                              margin: 0px;">
          <h4><strong> Subject:</strong> <%=leave.subject %></h4>
          <h5>Status: <%=leave.status %></h5>
          <h5>From: <%=moment(leave.from).format('DD/MM/YYYY') %></h5>
          <h5>To: <%=moment(leave.to).format('DD/MM/YYYY') %></h5>
          <h5>Total Days: <%=leave.days%></h5>
          <h5>Department: <%=faculty.department %></h5>
          <div class="col-sm-6">
            <input
              type="submit"
              class="btn btn-block btn-success"
              name="action"
              value="Approve"
            />
            <input
              type="submit"
              class="btn btn-block btn-danger"
              name="action"
              value="Deny"
            />
          </div>
        </div>
        <a style="position: absolute; top: 100%; left:0%;" href="/hod/<%=hod._id%>/leave">Back</a>
        <%})%>

      </div>
    </div>
  </form>
  <% include ./partial/footer %>
</div>