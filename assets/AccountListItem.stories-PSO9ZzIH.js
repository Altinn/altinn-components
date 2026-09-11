import{a7 as t,c as o}from"./iframe-O8cJNgnH.js";import{S as s}from"./Handshake-CG6s3wav.js";import{S as e}from"./Bell-kPap5P0p.js";import{S as n}from"./Hashtag-c0HlDIk3.js";import{S as p}from"./Files-hLNnotQF.js";import{A as l}from"./AccountListItem-BPxBdJr2.js";import{A as m}from"./AccountListItemDetails-BLdDvJ4E.js";import{L as c}from"./List-BRiZNku9.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DE6V7Ob0.js";import"./Input-BfEZmvKD.js";import"./Avatar-D8-vsJJv.js";import"./AvatarGroup-Ra_TR9_v.js";import"./Badge-BEBeTMrY.js";import"./Tooltip-BrWx-R_c.js";import"./Heading-BdhLm3SL.js";import"./useHighlightedText-CnUjn7TA.js";import"./ChevronUp-C3suJ612.js";import"./ChevronDown-D0blAyPo.js";import"./ChevronRight-U0ooHRaY.js";import"./HeartFill-DZ0-_mJf.js";import"./ContextMenu-Da0OMBba.js";import"./useDropdownMenuController-MyvXNyzM.js";import"./Dropdown-DmhW7MY5.js";import"./SearchField-bcjP3Rbv.js";import"./MagnifyingGlass-DHpnscJf.js";import"./FieldBase-SXGcT6A1.js";import"./Typography-DU3EjiaL.js";import"./Field-C6gWhPtJ.js";import"./Label-Bx5yqb_Y.js";import"./useMenu-BDnyYHA1.js";import"./MenuListItem-CQjZkQSb.js";import"./MenuListDivider-B5yo7PZG.js";import"./MenuListHeading-kFnOp7Lr.js";import"./MenuItem--4S_Ij0p.js";import"./ItemMedia-DQabxJtZ.js";import"./Checkmark-dNVTYLgC.js";import"./ItemLabel-C8aE3_ka.js";import"./ItemControls-Crhi56hp.js";import"./InformationSquare-CwO_8hH0.js";import"./MenuElipsisHorizontal-BSU1V6yq.js";import"./Section-D1aETyw8.js";import"./Flex-oXvF6uEL.js";import"./ButtonGroup-BrPvP3j_.js";import"./Divider-BCrvfH-b.js";import"./SettingsItem-DW5DrCm1.js";import"./SettingsItemBase-B45QdmHs.js";import"./ItemBase-w8iqJ0BX.js";import"./ItemLink-BhEV87zL.js";import"./SettingsModal-DKlAjCM8.js";import"./ModalBody-ClJuvryu.js";import"./ButtonIcon-BRVIbE9d.js";import"./ButtonLabel-DpkPepTV.js";import"./AccountOrganization-Cl9trSKK.js";import"./Byline-DHjFQhcs.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
