import{a7 as t,c as o}from"./iframe-CdYVD6SD.js";import{S as s}from"./Handshake-Bu52IwTE.js";import{S as e}from"./Bell-CQqZ0guI.js";import{S as n}from"./Hashtag-DHBFIJqZ.js";import{S as p}from"./Files-B2DfmFyY.js";import{A as m}from"./AccountListItem-DLTPetaR.js";import{A as l}from"./AccountListItemDetails-CZwSE3UU.js";import{L as c}from"./List-BOSoX1au.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-18oaQRPM.js";import"./Input-CF984aoc.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./Heading-Kaqd1h94.js";import"./useHighlightedText-DItA3cBY.js";import"./ChevronUp-BrRMdaLP.js";import"./ChevronDown-C8P1GjsS.js";import"./ChevronRight-Dr5zJkhS.js";import"./HeartFill-CmLcNOlW.js";import"./ContextMenu-Dh3e6JFy.js";import"./useDropdownMenuController-DJh2Guga.js";import"./Dropdown-BNNn4VPY.js";import"./SearchField-B_NM7GXp.js";import"./MagnifyingGlass-Cgduw8_l.js";import"./FieldBase-NvZtAXfB.js";import"./Typography-Dba7VpUA.js";import"./Field-DkF-iZgl.js";import"./Label-lXTSTWmW.js";import"./useMenu-CR8oLL1i.js";import"./MenuListItem-LpLMf6qu.js";import"./MenuListDivider-BO0zxfeS.js";import"./MenuListHeading-CKDNZjFs.js";import"./MenuItem-CJ_NtT0h.js";import"./ItemMedia-BIl5Wxj2.js";import"./Checkmark-DT64LcTm.js";import"./ItemLabel-DvFew2uy.js";import"./ItemControls-vidWw2G8.js";import"./index-D2d8PfjQ.js";import"./InformationSquare-Bk7KLwd3.js";import"./MenuElipsisHorizontal-BPjsS_Dz.js";import"./Section-Dk-Ohevy.js";import"./Flex-Cyvp2qjC.js";import"./ButtonGroup-B-NgaNCB.js";import"./Divider-Bd953ap4.js";import"./SettingsItem-kivhW477.js";import"./SettingsItemBase-CEWoePN9.js";import"./ItemBase-KuqrX7JT.js";import"./ItemLink-CU-HlXOq.js";import"./SettingsModal-oeTO1HA_.js";import"./ModalBody-BPE_VM4S.js";import"./ButtonIcon-Cf34fIGP.js";import"./ButtonLabel-D6MSJXz4.js";import"./AccountOrganization-B6-Mw53U.js";import"./Byline-HslkVsL1.js";const ut={title:"Account/AccountListItem",component:m,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vt=["Default","Expanded"];export{r as Default,i as Expanded,vt as __namedExportsOrder,ut as default};
