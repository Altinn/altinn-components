var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-B3JK86DP.js";import{S as l}from"./Handshake-DM8k9_js.js";import{S as a}from"./Bell-JxqnLWQM.js";import{S as m}from"./Hashtag-CUugEOQt.js";import{S as c}from"./Files-w7zPJCQV.js";import{A as g}from"./AccountListItem-zzaIkuw7.js";import{A as d}from"./AccountListItemDetails-C5ss_owZ.js";import{L as u}from"./List-CJlE7g3l.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-B6hmde0j.js";import"./Input-Dn912l6M.js";import"./Avatar-C5zwgekh.js";import"./AvatarGroup-CljQ4hw7.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./Heading-DhZTTpsP.js";import"./useHighlightedText-DIT5s5Wk.js";import"./ChevronUp-2E8wLm1d.js";import"./ChevronDown-eXgBXwsS.js";import"./ChevronRight-CXXN68ww.js";import"./HeartFill-BCuk1aAg.js";import"./ContextMenu-B2Ts5CPe.js";import"./useDropdownMenuController-DrRN5BOH.js";import"./Dropdown-D-XZVyts.js";import"./SearchField-CYbBjrsH.js";import"./MagnifyingGlass-Dar3Cjqj.js";import"./MenuListItem-Dv-zfi5J.js";import"./MenuListDivider-JnPQTBAl.js";import"./MenuItem-DcugXxJu.js";import"./CheckboxUncheckedIcon-DWGQqmR1.js";import"./RadioUncheckedIcon-BENOQjAf.js";import"./ItemMedia-w7Ibrgnv.js";import"./ItemLabel-UJIDw8s4.js";import"./ItemControls-EPopScKo.js";import"./FieldBase-BOLpoc-t.js";import"./Typography-AZ3lf-vT.js";import"./Field-4Patn0Bt.js";import"./Label-0jV2FogB.js";import"./useMenu-RTLBsPgV.js";import"./InformationSquare-DD61y5yY.js";import"./Section-DBrjPmQz.js";import"./Flex-DTtFl6cz.js";import"./ButtonGroup-svkpHY7L.js";import"./Divider-C4aAfbp2.js";import"./SettingsItem-DzMkwibY.js";import"./SettingsItemBase-CH16isHl.js";import"./ItemBase-CVpq_C38.js";import"./ItemLink-CI8JhxFv.js";import"./SettingsModal-DE14g6gU.js";import"./ModalBody-CwO02btK.js";import"./ButtonIcon-CL9cJJTZ.js";import"./ButtonLabel-BWRZYF93.js";import"./AccountOrganization-BXrRZLCH.js";import"./Byline-Ci-3RfFp.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,bt as __namedExportsOrder,xt as default};
