//import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
export default function App() {
  return (
    <>
      <div className="body">

        <div className="one">
          <Card sx={{ minWidth: 350, borderRadius: '16px' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Free
              </Typography>
              <Typography variant="h5" component="div">
              </Typography>
              <Typography sx={{ mb: 1.5 }} variant="h3" display="inline">
                <div className="dollar">
                $0<Typography variant="subtitle1" display="inline">/month</Typography>
                </div>
                <hr />
              </Typography>
              <Typography variant="body2">
                <div className="First-Typography">
                  <CheckIcon />
                  Single User
                  <br />
                  <br />
                  <CheckIcon />
                  5GB Storage
                  <br />
                  <br />
                  <CheckIcon />
                  Unlimited Public Projects
                  <br />
                  <br />
                  <CheckIcon />
                  Community Access
                  <br />
                  <br />

                </div>
                <div className="second-typography">
                  <ClearIcon />
                  Unlimited Private Projects
                  <br />
                  <br />
                  <ClearIcon />
                  Dedicated Phone Support
                  <br />
                  <br />
                  <ClearIcon />
                  Free Subdomain
                  <br />
                  <br />
                  <ClearIcon />
                  Monthly Status Reports
                  <br />
                  <br />
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" className="button-class" variant="contained">Button</Button>
            </CardActions>
          </Card>
        </div>


        <div className="two">
          <Card sx={{ minWidth: 350, borderRadius: '16px' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h5" component="div">
              </Typography>
              <Typography sx={{ mb: 1.5 }} variant="h3" display="inline">
              <div className="dollar">
                $9<Typography variant="subtitle1" display="inline">/month</Typography>
                </div>
                <hr />
              </Typography>
              <Typography variant="body2">
                <div className="Third-typography">
                  <CheckIcon />
                  <b>5 Users</b>
                  <br />
                  <br />
                  <CheckIcon />
                  5GB Storage
                  <br />
                  <br />
                  <CheckIcon />
                  Unlimited Public Projects
                  <br />
                  <br />
                  <CheckIcon />
                  Community Access
                  <br />
                  <br />
                  <CheckIcon />
                  Unlimited Private Projects
                  <br />
                  <br />
                  <CheckIcon />
                  Dedicated Phone Support
                  <br />
                  <br />
                  <CheckIcon />
                  Free Subdomain
                  <br />
                  <br />
                </div>
                <div class="Fourth-typography">
                  <ClearIcon />
                  Monthly Status Reports
                  <br />
                  <br />
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" className="button-class" variant="contained">Button</Button>
            </CardActions>
          </Card>

        </div>
        <div className="three">
          <Card sx={{ minWidth: 350, borderRadius: '16px' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h5" component="div">
              </Typography>

              <Typography sx={{ mb: 1.5 }} variant="h3" display="inline">
              <div className="dollar">
                $49<Typography variant="subtitle1" display="inline">/month</Typography>
                </div>
                <hr />
              </Typography>
              <Typography variant="body2">
                <CheckIcon />
                <b>Unlimited Users</b>
                <br />
                <br />
                <CheckIcon />

                150GB Storage
                <br />
                <br />
                <CheckIcon />

                Unlimited Public Projects
                <br />
                <br />
                <CheckIcon />

                Community Access
                <br />
                <br />
                <CheckIcon />

                Unlimited Private Projects
                <br />
                <br />
                <CheckIcon />

                Dedicated Phone Support
                <br />
                <br />
                <CheckIcon />

                <b>Unlimited Free Subdomain</b>
                <br />
                <br />
                <CheckIcon />

                Monthly Status Reports
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" className="button-class" variant="contained">Button</Button>
            </CardActions>
          </Card>


        </div>

      </div>
    </>
  );
}