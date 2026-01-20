import {
  Alert,
  AlertTitle,
  Button,
  MenuItem,
  Snackbar,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
const currencies = [
  {
    value: "User",
    label: "User",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "Admin",
    label: "Admin",
  },
];

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

// import { useForm } from "react-hook-form";
// import { Box, Stack, TextField, MenuItem, Button } from "@mui/material";

const ProfileForm = () => {
  const handelClick = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = () => {
    console.log("submit");
    handelClick();
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="row" spacing={2}>
        <TextField
          {...register("firstName")}
          sx={{ flex: 1 }}
          label="First Name"
          variant="outlined"
          helperText={Boolean(errors.firstName) ? "This field is required" : ""}
          error={Boolean(errors.firstName)}
          {...register("firstName", { required: true, maxLength: 20 })}
        />

        <TextField
          {...register("lastName")}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="outlined"
          helperText={Boolean(errors.lastName) ? "This field is required" : ""}
          error={Boolean(errors.lastName)}
          {...register("lastName", { required: true, maxLength: 20 })}
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "This field is required" : null}
        {...register("email", {
          required: true,
          pattern: regEmail,
        })}
        type="email"
        sx={{ flex: 1 }}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.phone)}
        helperText={Boolean(errors.phone) ? "This field is required" : null}
        {...register("phone", {
          required: true,
          pattern: regPhone,
        })}
        sx={{ flex: 1 }}
        label="Phone"
        variant="filled"
      />
      <TextField
        error={errors.address1 ? true : false}
        {...register("address1")}
        label="Address1"
        variant="filled"
      />
      <TextField
        error={errors.address2 ? true : false}
        {...register("address2")}
        label="Address2"
        variant="filled"
      />

      <TextField
        id="outlined-select-role"
        select
        label="Role"
        defaultValue="User"
        sx={{ width: "100%" }}
        variant="filled"
        {...register("role")}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={handelClick}
          type="submit"
          sx={{ mt: 3, textTransform: "capitalize", padding: "10px 20px" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%", text: "Right" }}
          >
            <AlertTitle severity="success">Success</AlertTitle>
            User Created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default ProfileForm;
