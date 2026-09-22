import{a7 as t,c as o}from"./iframe-Ca4u80-y.js";import{S as s}from"./Handshake-C8w1BgHg.js";import{S as e}from"./Bell-DKISlZtB.js";import{S as n}from"./Hashtag-BGCK9nu_.js";import{S as p}from"./Files-CPyHwBdv.js";import{A as l}from"./AccountListItem-DKTUzdMm.js";import{A as m}from"./AccountListItemDetails-aJiNcCqO.js";import{L as c}from"./List-DNrtm8Gg.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CSPc22TA.js";import"./Input-BzcsSDVe.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./Heading-DWBFau_k.js";import"./useHighlightedText-DqjIK10c.js";import"./ChevronUp-gNqlWqNl.js";import"./ChevronDown-ewsJqjFk.js";import"./ChevronRight-eVASrmJg.js";import"./HeartFill-BEhM8FIG.js";import"./ContextMenu-Cne7NUId.js";import"./useDropdownMenuController-BCGdba1O.js";import"./Dropdown-CqSqE0dA.js";import"./SearchField-VyNSBwjR.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./FieldBase-BaoqxAAt.js";import"./Typography-DWDEZq_R.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./useMenu-D83_Vp30.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuListDivider-R2CXinbT.js";import"./MenuListHeading-B4K-woqM.js";import"./MenuItem-BYM3QzRG.js";import"./ItemMedia-33czU3Hl.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./ItemControls-EuOl9yJJ.js";import"./InformationSquare-C5WU0eyN.js";import"./MenuElipsisHorizontal-ZgAigsFC.js";import"./Section-DPESya5-.js";import"./Flex-DwGvCXeV.js";import"./ButtonGroup-DxWQp11R.js";import"./Divider-BPwrxXbC.js";import"./SettingsItem-DOGxwTsm.js";import"./SettingsItemBase-BP_HO1-t.js";import"./ItemBase-CQLw8VD6.js";import"./ItemLink-C3-H5hes.js";import"./SettingsModal-CiFfnuDg.js";import"./ModalBody-BlWXQol1.js";import"./ButtonIcon-CPwlrksd.js";import"./ButtonLabel-DymAo8y_.js";import"./AccountOrganization-BzO_eTQk.js";import"./Byline-CZsol804.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
