<template>
	 <div class="body__footer footer">
        <div class="footer__left">2 2 left</div>
        <div class="footer__tabs">
          <label class="footer__tab">
            <input type="radio" name="filter" checked />
            <span>All</span>
          </label>
          <label class="footer__tab">
            <input type="radio" name="filter" />
            <span>Active</span>
          </label>
          <label class="footer__tab">
            <input type="radio" name="filter" />
            <span>Completed</span>
          </label>
        </div>
        <div class="footer__clear">Clear completed</div>
    </div>
</template>

<style scoped>
	.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 7px;
  font-size: 15px;
  border-top: 1px solid #afafad;
}
.footer__tabs {
  display: flex;
}
.footer__tab {
  cursor: pointer;
}
.footer__tab span {
  margin: 0 7px;
  padding: 3px;
}
.footer__tab input {
  display: none;
}
.footer__tab input:checked + span {
  border: 1px solid#EBD8D7;
  border-radius: 3px;
}
@media (max-width: 365px) {
  .footer__clear {
    padding: 5px 0 0 0;
  }
}
</style>