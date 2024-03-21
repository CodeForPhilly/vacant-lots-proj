import { Accordion, AccordionItem } from "@nextui-org/react";

export default function GetAccessPage() {
  return (
    <div>
      <h1 className="heading-3xl font-bold mb-6">Get Access</h1>

      <h2 className="heading-2xl font-bold mt-8">
        What does "get access" mean?
      </h2>
      <p className="body-md">
        In order to intervene in a property, you need to have some kind of legal
        access to do so. Broadly, this means either becoming the owner of the
        property yourself or reaching a legal agreement with the owner to allow
        you to transform the property. For every vacant property in
        Philadelphia, Clean & Green Philly highlights what we think the legal
        options are to get access to it. Below, we explain in more detail what
        these options are and how you can get help with each.
      </p>

      <h2 className="heading-2xl font-bold mt-8">
        How can I get access to a specific property?
      </h2>
      <p className="body-md">
        Generally speaking, there are two ways to get access to a property: you
        can either become the owner yourself or reach an agreement with the
        owner to let you access the property. Clean & Green Philly highlights
        three specific ways to become the owner of a property: buying it
        outright, getting it from the Philadelphia Land Bank, or being appointed
        its conservator through Act 135. We also indicate when we think the best
        approach is to reach a private land agreement with the property’s owner,
        which allows you to access the property without legally owning it.
        <br />
        <br />
        Although there are other possible ways to get access to a property (see
        below), these four routes are the most common and the only ones that we
        can infer from publicly-available data. Remember also that each of these
        options depends on your specific context. For example, Act 135
        conservatorship can be a very complicated process and is not necessarily
        suitable for a small community organization that doesn’t have legal
        support. Our goal is to help you understand which of these options is
        best suited for you and, based on that information, identify the
        property or properties where you can have the biggest impact.
      </p>

      <Accordion variant="light" selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Buying a Property"
          title="Buying a Property"
          subtitle="Click to expand"
          className="font-bold text-large"
        >
          <div className="text-base font-normal">
            Buying a property outright can often be the simplest, fastest way to
            get access to it. However, we recognize that not all properties are
            affordable to grassroots organizations or private individuals. Based
            on our stakeholder research, we mark vacant properties with an
            estimated market value of $1,000 or less as worth buying.
          </div>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="The Philadelphia Land Bank"
          title="The Philadelphia Land Bank"
          subtitle="Click to expand"
          className="font-bold text-large"
        >
          <div className="text-base font-normal">
            The Philadelphia Land Bank [https://phdcphila.org/] is part of the
            Philadelphia Housing Development Corporation. It works to
            redistribute publicly-owned land and return vacant properties to
            productive use. Vacant properties owned by the Land Bank can often
            be acquired for nominal or discounted prices for certain kinds of
            uses or projects. These include properties that:
            <br />
            <br />
            <ul className="list-disc pl-6 mb-4">
              <li>Qualify for the side/rear yard program</li>
              <li>
                Will be used for gardens, open space, or recreational areas
              </li>
              <li>Will be used for a business expansion</li>
              <li>Will be part of a development assemblage</li>
              <li>
                Will be part of affordable, mixed-income, or workforce housing
              </li>
              <li>Will benefit the community</li>
              <li>Will be included in economic development projects</li>
              <li>Will be used for urban agriculture</li>
              <li>
                Advance the City’s Strategic Plan or Comprehensive Land Use Plan
              </li>
            </ul>
            The advantage of this process is that it offers grassroots
            organizations and other community-oriented groups to get access to
            land through a non-competitive disposition process at little to no
            cost. However, one is still required to go through the Land Bank’s
            process, which also requires the support of the City Councilmember
            in whose district the property falls. Grounded in Philly provides a
            good overview of how to get permission to use City land
            [https://groundedinphilly.org/get-permission-to-use-land-city/ ].
            For more detailed information, please refer to the Land Bank’s
            official disposition process document
            [https://cdn-63e66af2c1ac1837386d75dd.closte.com/wp-content/uploads/2022/06/Philadelphia-Land-Bank-Disposition-Policies-2020-pubintlaw-copy.pdf].
          </div>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Act 135 Conservatorship"
          title="Act 135 Conservatorship"
          subtitle="Click to expand"
          className="font-bold text-large"
        >
          <div className="text-base font-normal">
            Act 135 conservatorship can be a potential faster route than other
            legal options but is complicated and requires a lot of resources. In
            short, if a property meets certain specific criteria, it can be
            turned over to a court-appointed conservator for remediation.
            According to the law, it must be unoccupied, abandoned by its owner,
            and unsafe and unhealthy. (For more information, consult this
            explanation of Act 135.
            [https://www.vanderslicelaw.com/service_index/real-estate/act-135/].)
            If those criteria are met, a private individual can petition a judge
            to appoint them as the conservator of the property. The conservator
            is then the owner of the property and can improve it as they see
            fit. However, as mentioned, taking this approach requires legal
            support and significant financial resources. It is therefore not an
            ideal route for small organizations, but may be an option for
            better-resourced organizations such as affordable housing
            developers.
          </div>
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Private Land Use Agreement"
          title="Private Land Use Agreement"
          subtitle="Click to expand"
          className="font-bold text-large"
        >
          <div className="text-base font-normal">
            A private land use agreement can be a fast and easy way to get
            access to a property, provided that you are able to find the owner
            of the property. When creating such an agreement, you must define
            the rights and responsibilities of yourself and the property owner.
            Grounded in Philly provides a good list of key considerations
            [https://groundedinphilly.org/make-agreement-private-landowner/] as
            well as sample agreement language.
          </div>
        </AccordionItem>
      </Accordion>

      <h2 className="heading-2xl font-bold mt-8">
        What do you mean by "do nothing"?
      </h2>
      <p className="body-md">
        Although most properties have at least one reasonable way to get access
        to them, in some cases, a property may have a particular combination of
        factors that make it difficult to impossible to get access to. For
        example, it may be a valuable property owned by a company that is
        planning to develop the property at a later date. If the company is
        unwilling to sell the property or negotiate a private land use
        agreement, there is basically no way to legally get access to the
        property. In these cases, we suggest that a more productive use of your
        time would be to focus on other properties where you can more easily
        pursue an intervention.
      </p>

      <h2 className="heading-2xl font-bold mt-8">Are there other options?</h2>
      <p className="body-md">
        The four options mentioned above are not a complete list of ways to get
        access to a vacant property in Philadelphia. There are several others
        worth considering. However, the criteria for these options depend
        completely on your individual circumstances. Since Clean & Green Philly
        only uses public data, we have no way of knowing whether you
        specifically qualify for these programs. However, if you think you might
        qualify for one of these options, we encourage you to consult a tool
        like Grounded in Philly’s pathways quiz
        [https://groundedinphilly.org/#pathways], which can better help you
        understand if you qualify.
      </p>
      <Accordion variant="light" selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Tangled Titles"
          title="Tangled Titles"
          subtitle="Click to expand"
          className="font-bold text-large"
        >
          <div className="text-base font-normal">
            A tangled title is a situation in which the deed to a property lists
            the name of someone other than the apparent owner. This often
            happens when children or grandchildren live in homes that are still
            listed in the name of a deceased parent or grandparent, for example.
            Tangled titles are a major issue in Philadelphia, affecting at least
            10,000 properties
            [https://www.pewtrusts.org/en/research-and-analysis/reports/2021/08/how-tangled-titles-affect-philadelphia],
            and can contribute to issues of vacancy and neglect. They are also
            difficult to resolve without legal support. If you are the rightful
            owner of a property with a tangled title, or if you believe that a
            vacant property in your neighborhood is the result of a tangled
            title, consider reaching out to Philadelphia Legal Assistance for
            help [https://philalegal.org/services/tangled-title].
          </div>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Adverse Possession"
          title="Adverse Possession"
          subtitle="Click to expand"
          className="font-bold text-large"
        >
          <div className="text-base font-normal">
            If you have been using a specific vacant property for a long time
            against the wishes of the property’s owner, you may qualify for
            adverse possession
            [https://groundedinphilly.org/how-to-obtain-land-adverse-possession/].
            This can be a good way to get full legal ownership of a property
            that has been neglected by someone else if you have invested effort
            in maintaining the property yourself (for example, as a member of a
            community garden). However, be aware that this is a very complicated
            process. It usually requires a lawyer and can require taking on
            years of unpaid property taxes. If you believe you may qualify for
            adverse possession, we recommend reaching out to the Garden Justice
            Legal Initiative [https://groundedinphilly.org/press/] for help.
          </div>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="The Side Yard Program"
          title="The Side Yard Program"
          subtitle="Click to expand"
          className="font-bold text-large"
        >
          <div className="text-base font-normal">
            If you live next to a vacant property, you may be able to buy it
            from the Land Bank to use as a side or rear yard. This is
            potentially a quick and easy way to make productive use of a vacant
            property, and we indicate in our dashboard whether or not a property
            is eligible for this program. If you believe you have the
            opportunity to acquire a vacant property through the side yard
            program, please consult the Land Bank’s guide to the side yard
            acquisition process
            [https://phdcphila.org/land/buy-land/side-or-rear-yards/].
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
