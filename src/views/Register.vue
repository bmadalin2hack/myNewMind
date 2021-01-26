<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{ invalid: $v.email.$error }">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            @blur="$v.email.$touch()"
            v-model="email"
          />
          <p v-if="!$v.email.email" id="error">
            Please provide a valid and unused e-mail
          </p>
        </div>
        <div class="input" :class="{ invalid: $v.password.$error }">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            @blur="$v.password.$touch()"
            v-model="password"
          />
        </div>
        <div class="input" :class="{ invalid: $v.confirmPassword.$error }">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            @blur="$v.confirmPassword.$touch()"
            v-model="confirmPassword"
          />
          <p v-if="!$v.confirmPassword.sameAs" id="error">
            Passwords do not match
          </p>
        </div>
        <div class="hobbies">
          <button @click="onAddHobby" type="button">
            Add Hobbies You Enjoy Doing
          </button>
          <div class="hobby-list">
            <div
              class="input"
              v-for="(hobbyInput, index) in hobbyInputs"
              :key="hobbyInput.id"
            >
              <label :for="hobbyInput.id">Hobby {{ index }}</label>
              <input
                type="text"
                :id="hobbyInput.id"
                @blur="$v.hobbyInputs.$each[index].value"
                v-model="hobbyInput.value"
              />
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">
                X
              </button>
            </div>
          </div>
        </div>
        <div class="input inline">
          <input type="checkbox" id="terms" value="Subscribe" checked />
          <label for="terms">Subscribe to our newsletter</label>
        </div>
        <div class="submit">
          <button type="submit" :disabled="$v.$error">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      age: null,
      password: "",
      confirmPassword: "",
      country: "usa",
      hobbyInputs: [],
      terms: false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    },
    confirmPassword: {
      sameAs: sameAs("password")
    },
    hobbyInputs: {
      $each: {
        value: {
          required
        }
      }
    }
  },
  methods: {
    onAddHobby() {
      const newHobby = {
        id: Math.random() * Math.random() * 1000,
        value: ""
      };
      this.hobbyInputs.push(newHobby);
    },
    onDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id);
    },
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        hobbies: this.hobbyInputs.map(hobby => hobby.value),
        terms: this.terms
      };
      this.$store.dispatch("register", formData);
    }
  }
};
</script>

<style scoped>
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid rgb(255, 254, 254);
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px rgba(114, 34, 78, 0.067);
  background-color: #eee;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.input.invalid label {
  color: rgb(172, 26, 21);
}

.input.invalid input {
  border: 1px border red;
  background-color: rgb(231, 184, 175);
}

.hobbies button {
  border: 1px solid #7e747e;
  background: #625b62;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #220120;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #312c31;
  color: #110f11;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #4b434b;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

#error {
  color: #880303;
}
</style>
