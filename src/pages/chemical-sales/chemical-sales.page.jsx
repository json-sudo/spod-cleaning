import React from 'react'

import './chemical-sales.styles.scss'

const ChemicalSalesPage = () => {
    const requestService = () => window.location.href="/services#send-a-request"

    return (
        <div className="chemical-sales-container">
            <div className="chemical-sales">
                <div className="overlay"></div>
                <img src="https://res.cloudinary.com/dynamicjson/image/upload/c_scale,q_80,w_auto/v1596288594/oil-2339939_1280_fypjsw.jpg" alt="Industrial oil"/>
                <h1>Chemical sales</h1>
            </div>

            <section className="chemical-description">
                <p>
                    Our services include the sale of industrial chemicals. We sell chemicals for use across
                    numerous activities involved in oil rig and well operations.
                    <br /><br />
                    You can find a list of chemicals we sell below. The list is not exhaustive
                    as we make it our duty to provide what you need as soon as possible.
                </p>

                <span 
                    className="link-button" 
                    onClick={() => requestService()}
                    role="link"
                    tabIndex={0}
                >
                    Rent an equipment now
                </span>
            </section>

            <section className="chemicals-list">
                <h2>Production chemicals</h2>

                <table class="chemical-list">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Chemical Name</th>
                            <th>Chemical Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td><td>SPECTRUS NX1100</td><td>BIOCIDE</td>
                        </tr>
                        
                        <tr>
                            <td>2</td><td>SPECTRUS NX1173</td><td>BIOCIDE</td>
                        </tr>

                        <tr>
                            <td>3</td><td>BARSOL 2NS</td><td>SCALE DISSOLVER</td>
                        </tr>

                        <tr>
                            <td>4</td><td>NORUST SC S6</td><td>H2S SCAVENGER</td>
                        </tr>

                        <tr>
                            <td>5</td><td>PROCHINOR AM 2852</td><td>ANTIFOAM</td>
                        </tr>

                        <tr>
                            <td>6</td><td>EC 6359A</td><td>SCALE INHIBITOR</td>
                        </tr>

                        <tr>
                            <td>7</td><td>PC SI 3403</td><td>SCALE INHIBITOR</td>
                        </tr>

                        <tr>
                            <td>8</td><td>BACKTIREP 3918S</td><td>BIOCIDE</td>
                        </tr>

                        <tr>
                            <td>9</td><td>EC 6082A</td><td>SCALE INHIBITOR</td>
                        </tr>

                        <tr>
                            <td>10</td>
                            <td>PCB 1500</td>
                            <td>BIOCIDE</td>
                        </tr>

                        <tr>
                            <td>11</td>
                            <td>CALCIUM NITRATE LIQUID 45-51%</td>
                            <td>CALCIUM NITRATE</td>
                        </tr>

                        <tr>
                            <td>12</td>
                            <td>Bactirep 4037S 	BIOCIDE</td>
                            <td>BIOCIDE</td>
                        </tr>

                        <tr>
                            <td>13</td>
                            <td>TASMANIA BLUE GOLD SOLUTION</td>
                            <td>BIOREMEDIATION</td>
                        </tr>

                        <tr>
                            <td>14</td>
                            <td>BDO 2002</td>
                            <td>CLEANING AGENT</td>
                        </tr>

                        <tr>
                            <td>15</td>
                            <td>PROSOLV HS8753</td>
                            <td>HYDROGEN SCAVENGER</td>
                        </tr>

                        <tr>
                            <td>16</td>
                            <td>FLOGARD MS 6208</td>
                            <td>CORROSION INHIBITOR</td>
                        </tr>

                        <tr>
                            <td>17</td>
                            <td>NORUST 730</td>
                            <td>CORROSION INHIBITOR</td>
                        </tr>

                        <tr>
                            <td>18</td>
                            <td>RO GT V660N</td>
                            <td>HYDROGEN SCAVENGER</td>
                        </tr>

                        <tr>
                            <td>19</td>
                            <td>WEB 1915</td>
                            <td>DEMULSIFIER</td>
                        </tr>

                        <tr>
                            <td>20</td>
                            <td>BPC6815</td>
                            <td>CORROSION INHIBITOR</td>
                        </tr>

                        <tr>
                            <td>21</td>
                            <td>HSW 82632</td>
                            <td>SRB CONTROL AGENT</td>
                        </tr>

                        <tr>
                            <td>22</td>
                            <td>FORSA HIW 85330</td>
                            <td>HYDRATED INHIBITOR</td>
                        </tr>

                        <tr>
                            <td>23</td>
                            <td>CGW 80437</td>
                            <td>CORROSION INHIBITOR</td>
                        </tr>

                        <tr>
                            <td>24</td>
                            <td>HW 443</td>
                            <td>HYDRAULIC CONTROL</td>
                        </tr>

                        <tr>
                            <td>25</td>
                            <td>DMO 87005</td>
                            <td>DEMULSIFIER</td>
                        </tr>

                        <tr>
                            <td>26</td>
                            <td>DMO 87019</td>
                            <td>DEMULSIFIER</td>
                        </tr>

                        <tr>
                            <td>27</td>
                            <td>WFT 9318C</td>
                            <td>OXYGEN SCAVENGER</td>
                        </tr>

                        <tr>
                            <td>28</td>
                            <td>BACTIREP 4038 SM</td>
                            <td>BIOCIDE</td>
                        </tr>

                        <tr>
                            <td>29</td>
                            <td>BACTIREP 3941 M</td>
                            <td>BIOCIDE</td>
                        </tr>

                        <tr>
                            <td>30</td>
                            <td>BACTIREP 4037 SM</td>
                            <td>BIOCIDE</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>EC6023A</td>
                            <td>WATER CLARIFIER</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>EC6542A</td>
                            <td>SCALE INHIBITOR</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>VX9298</td>
                            <td>BIOCIDE</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>NG4BOO2W</td>
                            <td>BIOCIDE</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>EC6029A</td>
                            <td>WATER CLARIFIER</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>EC6175A</td>
                            <td>WATER CLARIFIER</td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>EC2206A</td>
                            <td>EMULSION BREAKER</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td>EC2034A</td>
                            <td>EMULSION BREAKER</td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td>EC9017A</td>
                            <td>ANTIFOAM</td>
                        </tr>

                        <tr>
                            <td>40</td>
                            <td>VX11207/ EC6838C</td>
                            <td>BIOCIDE/CORROSION INHIBITOR</td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>01VZ142</td>
                            <td>EMULSION BREAKER</td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td>EC6157A</td>
                            <td>WATER CLARIFIER</td>
                        </tr>
                        <tr>
                            <td>43</td>
                            <td>EC6585A</td>
                            <td>BIOCONTROL/ CALCIUM NITRATE</td>
                        </tr>
                        <tr>
                            <td>44</td>
                            <td>EC275A</td>
                            <td>EMULSION BREAKER</td>
                        </tr>
                        <tr>
                            <td>45</td>
                            <td>NAPHTHASURE CN1007</td>
                            <td>CALCIUM NAPHTHANATE</td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td>EC6388A</td>
                            <td>BIOCIDE</td>
                        </tr>
                        <tr>
                            <td>47</td>
                            <td>EC9054A</td>
                            <td>PROCESS ANTIFOAM</td>
                        </tr>
                        <tr>
                            <td>48</td>
                            <td>EC6129A</td>
                            <td>CATIONIC POLYELECTROLYTE</td>
                        </tr>
                        <tr>
                            <td>49</td>
                            <td>N7330</td>
                            <td>COOLING WATER BIOCIDE</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>N8325</td>
                            <td>CORROSION INHIBITOR</td>
                        </tr>
                        <tr>
                            <td>51</td>
                            <td>ELIMINOX</td>
                            <td>OXYGEN SCAVENGERS</td>
                        </tr>
                        <tr>
                            <td>52</td>
                            <td>EC1005A</td>
                            <td>GLYCOL PH ADJUSTER</td>
                        </tr>
                        <tr>
                            <td>53</td>
                            <td>N2000</td>
                            <td>COOLANT</td>
                        </tr>
                        <tr>
                            <td>54</td>
                            <td>MICRO-ORGANISM CONTROL</td>
                            <td>NALCO</td>
                        </tr>
                        <tr>
                            <td>55</td>
                            <td>PARAFFIN INHIBITOR</td>
                            <td>NALCO</td>
                        </tr>
                        <tr>
                            <td>56</td>
                            <td>SCALE & FOULING TREATMENT</td>
                            <td>NALCO</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Drilling products</h2>

                <table className="chemical-list">
                    <tbody>
                        <tr>
                            <td>57</td>
                            <td>ECF 2744-HT</td>
                            <td>DRILLING FLUID ADDITIVE</td>
                        </tr>
                        <tr>
                            <td>58</td>
                            <td>AFIS DRILL</td>
                            <td>OIL MUD SYSTEM</td>
                        </tr>
                        <tr>
                            <td>59</td>
                            <td>KCL-POLYMER</td>
                            <td>Water Based Mud System</td>
                        </tr>
                        <tr>
                            <td>60</td>
                            <td>GEODRILL-101</td>
                            <td>SYTHTHTIC OIL BASE MUD SYSTEM</td>
                        </tr>
                        <tr>
                            <td>61</td>
                            <td>DFE-734</td>
                            <td>WELLBORE STIMULANT</td>
                        </tr>
                        <tr>
                            <td>62</td>
                            <td>HAMDRIL MUD SYSTEM</td>
                            <td>MUD SYSTEM</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Oil cleaning chemicals</h2>

                <table className="chemical-list">
                    <tbody>
                        <tr>
                            <td>63</td>
                            <td>EKOLAN-M</td>
                            <td>BIOREMEDIATION AGENT</td>
                        </tr>
                        <tr>
                            <td>64</td>
                            <td>WWC 6103</td>
                            <td>FLOCCULATING AGENT</td>
                        </tr>
                        <tr>
                            <td>65</td>
                            <td>KLEEN RINSE</td>
                            <td>SURFACTANT/NON-EMULSIFIER</td>
                        </tr>
                        <tr>
                            <td>66</td>
                            <td>ENVIRONGREEN EHCS 1870</td>
                            <td>BIOREMEDIATION AGENT</td>
                        </tr>
                        <tr>
                            <td>67</td>
                            <td>OLEOSORBENT PARTICLE</td>
                            <td>OIL SPILL ABSORBENT</td>
                        </tr>
                        <tr>
                            <td>68</td>
                            <td>OSD-2672</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>69</td>
                            <td>PFR 125</td>
                            <td>TRIETHYLENEGLYCOL</td>
                        </tr>
                        <tr>
                            <td>70</td>
                            <td>PFR 143</td>
                            <td>MONOETHYLENEGLYCOL</td>
                        </tr>
                        <tr>
                            <td>71</td>
                            <td>SHAMANTRA GODODEL</td>
                            <td>BIOREMEDIATION AGENT</td>
                        </tr>
                        <tr>
                            <td>72</td>
                            <td>TRIPLE 7</td>
                            <td>BIOREMEDIATION AGENT</td>
                        </tr>
                        <tr>
                            <td>73</td>
                            <td>E.T 20 NUTRIENT</td>
                            <td>BIOREMEDIATION AGENT</td>
                        </tr>
                        <tr>
                            <td>74</td>
                            <td>SHEEN MAGIC</td>
                            <td>BIOREMEDIATION AGENT</td>
                        </tr>
                        <tr>
                            <td>75</td>
                            <td>E-SAFE</td>
                            <td>BIOREMEDIATION AGENT</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ChemicalSalesPage
