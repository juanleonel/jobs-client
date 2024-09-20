<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form action="">
          <div class="mb-3">
            <label for="Title" class="form-label">Title</label>
            <input type="text" class="form-control" id="Title" aria-describedby="Title">
          </div>
          <div class="mb-3">
            <label for="Title" class="form-label">Description</label>
            <textarea class="form-control" name="description" id="description" cols="30" rows="10"></textarea>
          </div>
          <div class="mb-3">
            <label for="salary" class="form-label">Salary</label>
            <input type="number" class="form-control" id="salary" aria-describedby="salary">
          </div>
          <div class="mb-3">
            <select class="form-select" aria-label="Default select example">
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mb-3">
            <select class="form-select" aria-label="Default select example">
              <option selected>Terms</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Logo</label>
            <input class="form-control" type="file" id="formFile">
          </div>
          <button class="btn btn-success">Create</button>
          <button class="btn btn-warning">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
